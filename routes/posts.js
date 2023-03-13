const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth } = require("../middleware/auth");

//Post Routes
//Since linked from server js treat each path as:
//post/:id, post/createPost, post/likePost/:id, post/deletePost/:id

//To be used to get a specific post, not needed right now
// router.get("/:id", ensureAuth, postsController.getPost);

//Enables user to fetch a random post on the profile page
router.get("/random", ensureAuth, postsController.getRandom);

//Gets all posts for the all posts page
router.get("/allposts", ensureAuth, postsController.getAll);

//Enables user to create post w/ cloudinary for media uploads
router.post("/createPost", upload.single("file"), postsController.createPost);

//Enables user to edit post
router.put("/editPost/:id", upload.single("file"), postsController.editPost);

//Enables user to delete post. In controller, uses POST model to delete post from MongoDB collection
router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;
