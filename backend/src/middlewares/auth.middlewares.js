import { User } from "../models/user.models.js";
import { ApiError } from "../utils/ApiError.js";

import jwt from "jsonwebtoken";

export const verifyJWT = async (req, res, next) => {
  try {
    const token =
      req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new ApiError(401, "Unauthorized");
    }
    const decodedToken = await jwt.verify(
      token,
      process.env.REFRESH_TOKEN_SECRET
    );
    const user = await User.findById(decodedToken._id).select(
      "-password -token"
    );
    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, error.message || "Unauthorized");
  }
};