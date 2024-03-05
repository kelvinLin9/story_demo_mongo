var express = require('express');
var router = express.Router();
const Post = require('../models/media/postsModel');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const post = await Post.find();
  // res.send('respond with a resource..');
  res.status(200).json({
    post
  })
});

router.post('/', async function(req, res, next) {
  console.log(req.body);
  const newPost = await Post.create(req.body);
  res.status(200).json({
    statusbar: 'success',
    post: newPost
  })
});


module.exports = router;