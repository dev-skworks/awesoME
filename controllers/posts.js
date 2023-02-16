const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");

module.exports = {
  getProfile: async (req, res) => { 
    console.log(req.user)
    try {
      //Since we have a session each request (req) contains the logged-in users info: req.user
      //console.log(req.user) to see everything
      //Grabbing just the posts of the logged-in user
      const posts = await Post.find({ user: req.user.id });
      //Sending post data from mongodb and user data to ejs template
      res.render("profile.ejs", { posts: posts, post: posts[0], user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getAll: async (req, res) => { 
    console.log(req.user)
    try {
      //Since we have a session each request (req) contains the logged-in users info: req.user
      //console.log(req.user) to see everything
      //Grabbing just the posts of the logged-in user
      const posts = await Post.find({ user: req.user.id });
      //Sending post data from mongodb and user data to ejs template
      console.log({posts})
      res.render("post.ejs", { posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getPost: async (req, res) => {
    try {
      //id parameter comes from the post routes
      //router.get("/:id", ensureAuth, postsController.getPost);
      //http://localhost:2121/post/631a7f59a3e56acfc7da286f
      //id === 631a7f59a3e56acfc7da286f
      const post = await Post.findById(req.params.id);
      res.render("post.ejs", { post: post, user: req.user});
    } catch (err) {
      console.log(err);
    }
  },
  getRandom: async (req, res) => {
    try {
      const [randomPost] = await Post.aggregate([ { $sample: { size: 1 } } ]);
      console.log({randomPost})
      res.send({ post: randomPost, user: req.user})
    } catch (err) {
      console.log(err)
    }
  },
  createPost: async (req, res) => {
    try {
      // Upload image to cloudinary
      let result
      if (req.file) {
        result = await cloudinary.uploader.upload(req.file.path);
      }

      //media is stored on cloudinary - the above request responds with url to media and the media id that you will need when deleting content
      await Post.create({
        from: req.body.from,
        image: result ? result.secure_url : null,
        cloudinaryId: result ? result.public_id : null,
        note: req.body.note,
        category: req.body.category.split(", "),
        user: req.user.id,
      });
      console.log("Post has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  editPost: async (req,res) => {
    try {
      console.log(req.params.id, req.body)
      
      await Post.findByIdAndUpdate(
        req.params.id,
        {
          from: req.body.from,
          note: req.body.note,
          category: req.body.category.split(", ")
        }
      );
      res.redirect("/post/allposts");

    } catch (err) {
      console.log(err);
      res.redirect("/post/allposts");
    }

  },
  deletePost: async (req, res) => {
    try {
      // Find post by id
      let post = await Post.findById({ _id: req.params.id });
      // Delete image from cloudinary
      if (post.cloudinaryId != null) {  
        await cloudinary.uploader.destroy(post.cloudinaryId);
      }
      // Delete post from db
      await Post.remove({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/post/allposts");
    } catch (err) {
      res.redirect("/post/allposts");
    }
  },
};
