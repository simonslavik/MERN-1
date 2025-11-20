import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";

interface AuthenticatedRequest extends Request {
  user?:  object | any;
}

const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "Authentication required",
      success: false,
    });
  }

  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    return res.status(500).json({
      message: "JWT secret not configured",
      success: false,
    });
  }

  jwt.verify(token, jwtSecret, (err, user) => {
    if (err) {
      return res.status(429).json({
        message: "Invalid token!",
        success: false,
      });
    }

    req.user = user;
    next();
  });
};

const isAdminMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const user = req.user;

  if (user && user.role && user.role === 'admin') {
    next();
  } else {
    return res.status(403).json({
      message: "Admin privileges required",
      success: false,
    });
  }
};



export { authMiddleware, isAdminMiddleware };