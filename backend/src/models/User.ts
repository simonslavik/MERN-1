import argon2 from 'argon2';
import mongoose from 'mongoose';

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    comparePassword(candidatePassword: string): Promise<boolean>;
}


enum Role {
    User = 'user',
    Admin = 'admin'
}

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
      type: String,
      enum: Object.values(Role),
      default: 'user'
  }
}, { timestamps: true });

UserSchema.pre("save", async function (this: any) {
  if (this.isModified("password")) {
    try {
      this.password = await argon2.hash(this.password);
    } catch (error) {
      throw error;
    }
  }
});

UserSchema.methods.comparePassword = async function (candidatePassword: string) {
  try {
    return await argon2.verify(this.password, candidatePassword);
  } catch (error) {
    throw error;
  }
};





UserSchema.index({ username: "text" });

export const User = mongoose.model<IUser>("User", UserSchema);
