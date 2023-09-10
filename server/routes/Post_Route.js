const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const PostModel = mongoose.model("PostModel");
const protectedRoute = require("../Middleware/Middleware");
// const PostModel = require('../Modeks/Post_Model')

router.get("/allposts", (req, res) => {
    PostModel.find()
        .populate("author", "_id fullName profileImg")
        .populate("comments.commentedBy", "_id fullName")
        .then((dbPosts) => {
            res.status(200).json({ posts: dbPosts })
        })
        .catch((error) => {
            console.log(error);
        })
});

router.get("/myallposts", protectedRoute, (req, res) => {
    PostModel.find({ author: req.user._id })
        .populate("author", "_id fullName profileImg")
        .then((dbPosts) => {
            res.status(200).json({ posts: dbPosts })
        })
        .catch((error) => {
            console.log(error);
        })
});

router.post("/createpost", protectedRoute, (req, res) => {
    const { description, location, image } = req.body;
    if (!description || !location || !image) {
        return res.status(400).json({ error: "One or more mandatory fields are empty" });
    }
    req.user.password = undefined;
    const postObj = new PostModel({ description: description, location: location, image: image, author: req.user });
    postObj.save()
        .then((newPost) => {
            res.status(201).json({ post: newPost });
        })
        .catch((error) => {
            console.log(error);
        })
});

// router.delete("/deletepost/:postId", protectedRoute, (req, res) => {
//     PostModel.findOne({ _id: req.params.postId })
//         .populate("author", "_id")
//         .exec((error, postFound) => {
//             if (error || !postFound) {
//                 return res.status(400).json({ error: "Post does not exist" });
//             }
           
//             if (postFound.author._id.toString() === req.user._id.toString()) {
//                 postFound.remove()
//                     .then((data) => {
//                         res.status(200).json({ result: data });
//                     })
//                     .catch((error) => {
//                         console.log(error);
//                     })
//             }
//         })
// });

router.delete("/deletepost/:postId", protectedRoute, (req, res) => {
    PostModel.findOne({ _id: req.params.postId })
        .populate("author", "_id")
        .then((postFound) => {  // exec() fucntion is not working with latest mongoose
            if (!postFound) {
                return res.status(400).json({ result: "Post does not exist" });
            }
            //check if the post author is same as loggedin user only then allow deletion
            console.log(postFound);
            if (postFound.author._id.toString() === req.user._id.toString()) {
                postFound.deleteOne()  // remove() function is also not working with latest mongodb
                    .then((data) => {
                        res.status(200).json({ result: data });
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        })
        .catch((error) => {
            return res.status(400).json({ error: "Post does not exist error" });
        });

});

router.put("/like", protectedRoute, (req, res) => {
    PostModel.findByIdAndUpdate(req.body.postId, {
        $push: { likes: req.user._id }
    }, {
        new: true //returns updated record
    }).populate("author", "_id fullName")
        // .exec((error, result) => {
        //     if (error) {
        //         return res.status(400).json({ error: error });
        //     } else {
        //         res.json(result);
        //     }
        // })

        .then((result) => {
            return res.status(200).json(result);
        })
        .catch((error) => {
            return res.status(400).json({ error: error });
        })
});
router.put("/unlike", protectedRoute, (req, res) => {
    PostModel.findByIdAndUpdate(req.body.postId, {
        $pull: { likes: req.user._id }
    }, {
        new: true //returns updated record
    }).populate("author", "_id fullName")
        // .exec((error, result) => {
        //     if (error) {
        //         return res.status(400).json({ error: error });
        //     } else {
        //         res.json(result);
        //     }
        // })

        .then((result) => {
            return res.status(200).json(result);
        })
        .catch((error) => {
            return res.status(400).json({ error: error });
        })
});
router.put("/comment", protectedRoute, (req, res) => {

    const comment = { commentText: req.body.commentText, commentedBy: req.user._id }

    PostModel.findByIdAndUpdate(req.body.postId, {
        $push: { comments: comment }
    }, {
        new: true //returns updated record
    }).populate("comments.commentedBy", "_id fullName") //comment owner
        .populate("author", "_id fullName")// post owner
        // .exec((error, result) => {
        //     if (error) {
        //         return res.status(400).json({ error: error });
        //     } else {
        //         res.json(result);
        //     }
        // })

        .then((result) => {
            return res.status(200).json(result);
        })
        .catch((error) => {
            return res.status(400).json({ error: error });
        })
});
module.exports = router;