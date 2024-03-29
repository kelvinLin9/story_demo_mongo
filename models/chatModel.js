const mongoose = require('mongoose');

// 定義聊天消息的 Schema
const chatMessageSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  // 添加時間戳以追蹤消息創建時間
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// 創建模型
const ChatMessage = mongoose.model('ChatMessage', chatMessageSchema);

module.exports = ChatMessage;

