import {User} from '../models/User.js';
import {RefreshToken} from '../models/RefreshToken.js';
import { validateRegistration, validateLogin } from '../utils/validation.js';
import type { Request, Response } from 'express';
import generateTokens from '../utils/generateTokens.js';

const registerUser = async (req: Request, res: Response) => {
    try {
        const { error } = validateRegistration(req.body);
        if (error) {
            return res.status(400).json({ message: error.details?.[0]?.message || "Invalid registration data" });
        }

        const {username, email, password, role} = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User with this email already exists" });
        }

        const newUser = new User({ username, email, password, role });
        const savedUser = await newUser.save();

        const { accessToken, refreshToken } = await generateTokens({ 
            ...savedUser.toObject(), 
            _id: savedUser._id.toString(),
            role: req.body.role
        });
        
        res.status(201).json({
          success: true,
          message: "User registered successfully!",
          accessToken,
          refreshToken,
          user: savedUser,
        });
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error });
    }
}

const loginUser = async (req: Request, res: Response) => {
    try {
        const { error } = validateLogin(req.body);
        if (error) {
            return res.status(400).json({ message: error.details?.[0]?.message || "Invalid login data" });
        }

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "Invalid email !" });
        }
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password!" });
        }

        const { accessToken, refreshToken } = await generateTokens({
            ...user.toObject(),
            _id: user._id.toString(),
            role: (user as any).role?.toString()
        });

        res.status(201).json({
          success: true,
          accessToken,
          refreshToken,
          user,
        });
    } catch (error) {
        res.status(500).json({ message: "Error logging in", error });
    }
}

const refreshTokenUser = async (req: Request, res: Response) => {

  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {

      return res.status(400).json({
        success: false,
        message: "Refresh token missing",
      });
    }

    const storedToken = await RefreshToken.findOne({ token: refreshToken });
    
    if (!storedToken) {

      return res.status(400).json({
        success: false,
        message: "Invalid refresh token",
      });
    }

    if (storedToken.expiresAt < new Date()) {
      return res.status(401).json({
        success: false,
        message: `Expired refresh token`,
      });
    }

    const user = await User.findById(storedToken.user);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: `User not found`,
      });
    }

    const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
      await generateTokens({
        ...user.toObject(),
        _id: user._id.toString(),
        role: (user as any).role?.toString()
      });

    //delete the old refresh token
    await RefreshToken.deleteOne({ token: refreshToken });

    res.json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  } catch (e) {

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const logoutUser = async (req: Request, res: Response) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return res.status(400).json({
        success: false,
        message: "Refresh token missing",
      });
    }

   const storedToken = await RefreshToken.findOneAndDelete({
      token: refreshToken,
    });
    if (!storedToken) {
      return res.status(400).json({
        success: false,
        message: "Invalid refresh token",
      });
    }

    res.json({
      success: true,
      message: "Logged out successfully!",
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
};




export { registerUser, loginUser, refreshTokenUser, logoutUser, getUsers };