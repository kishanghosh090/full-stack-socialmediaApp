import { Router } from "express";
import { createPost, getAllPosts } from "../controllers/posts.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { upload } from "../middlewares/multer.middleare.js";

const router = Router();

// create post route-----
router.route("/createPost").post(verifyJWT, upload.single("image"), createPost);
// get all posts route-----
router.route("/getAllPosts").get(verifyJWT, getAllPosts);
//export router
export default router;
