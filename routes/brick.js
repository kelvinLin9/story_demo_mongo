const express = require('express');
const router = express.Router();
const Brick = require('../models/brickModel');

router.post('/', async (req, res) => {
  try {
    const brick = new Brick(req.body);
    await brick.save();
    res.status(201).send(brick);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const bricks = await Brick.find({}).populate('content'); 
    res.status(200).send(bricks);
  } catch (error) {
    res.status(500).send(error);
  }
});


router.get('/id/:id', async (req, res) => {
  try {
    const brick = await Brick.findById(req.params.id).populate('content');
    if (!brick) {
      return res.status(404).send();
    }
    res.status(200).send(brick);
  } catch (error) {
    res.status(500).send(error);
  }
});

// router.get('/:brickName', async (req, res) => {
//   console.log(req.params.brickName);
//   try {
//     const { brickName } = req.params.brickName;

//     // 使用storyName进行查询
//     const brick = await Brick.findOne({ brickName: brickName }).populate('content');
//     if (!brick) {
//       // 如果没有找到匹配的文档，返回404
//       return res.status(404).send({ message: "No brick found with the given name" });
//     }
//     res.status(200).send(brick);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

router.patch('/:id', async (req, res) => {
  try {
    const brick = await Brick.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!brick) {
      return res.status(404).send();
    }
    res.status(200).send(brick);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const brick = await Brick.findByIdAndDelete(req.params.id);
    if (!brick) {
      return res.status(404).send();
    }
    res.status(200).send(brick);
  } catch (error) {
    res.status(500).send(error);
  }
});



module.exports = router;
