const express = require('express');
const router = express.Router();
const ChatMessage = require('../models/chatModel'); // 确保路径正确

// 获取指定聊天室的历史消息
router.get('/:room', async (req, res) => {
  try {
    const messages = await ChatMessage.find({ room: req.params.room });
    res.json(messages);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
