import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Post } from "../models/posts.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
//create post-----------
const createPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      throw new ApiError(400, "All fields are required");
    }
    const user = req.user;
    if (!user) {
      throw new ApiError(401, "Unauthorized");
    }

    // upload image------
    const imageLocalPath = req.file?.path;
    if (!imageLocalPath) {
      throw new ApiError(400, "Image is required");
    }
    const image = await uploadOnCloudinary(imageLocalPath);
    if (!image) {
      throw new ApiError(500, "Failed to upload image");
    }

    // create post-------
    const newPost = await Post.create({
      title,
      description,
      image: image?.url,
      user: user._id,
    });
    // send response-------
    return res
      .status(200)
      .json(new ApiResponse(200, newPost, "Post created successfully"));
  } catch (error) {
    throw new ApiError(500, error.message || "Faild to Create Post");
  }
};

// get all posts-------
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("user");
    if (!posts) {
      throw new ApiError(404, "No posts found");
    }

    // send response-----
    return res
      .status(200)
      .json(new ApiResponse(200, posts, "All posts fetched successfully"));
  } catch (error) {
    throw new ApiError(500, error.message || "Faild to Get All Posts");
  }
};


// --------------export router---------------------------
export { createPost, getAllPosts };
