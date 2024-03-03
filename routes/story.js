const express = require('express');
const router = express.Router();
const Story = require('../models/storyModel');

// 假设你的Story模型中有一个storyName字段
router.post('/:storyName', async (req, res) => {
  try {
    // 将storyName添加到story中
    const story = new Story({ ...req.body, storyName: req.params.storyName });
    await story.save();
    res.status(201).send(story);
  } catch (error) {
    res.status(400).send(error);
  }
});


router.get('/:storyName', async (req, res) => {
  try {
    const stories = await Story.find({ tags: req.params.storyName });
    res.status(200).send(stories);
  } catch (error) {
    res.status(500).send(error);
  }
});

// 获取指定storyName下的特定story
router.get('/:storyName/:id', async (req, res) => {
  try {
    const story = await Story.findOne({ _id: req.params.id, storyName: req.params.storyName });
    if (!story) {
      return res.status(404).send();
    }
    res.status(200).send(story);
  } catch (error) {
    res.status(500).send(error);
  }
});

// 更新指定storyName下的特定story
router.patch('/:storyName/:id', async (req, res) => {
  try {
    const story = await Story.findOneAndUpdate({ _id: req.params.id, storyName: req.params.storyName }, req.body, { new: true, runValidators: true });
    if (!story) {
      return res.status(404).send();
    }
    res.status(200).send(story);
  } catch (error) {
    res.status(400).send(error);
  }
});

// 删除指定storyName下的特定story
router.delete('/:storyName/:id', async (req, res) => {
  try {
    const story = await Story.findOneAndDelete({ _id: req.params.id, storyName: req.params.storyName });
    if (!story) {
      return res.status(404).send();
    }
    res.status(200).send(story);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
