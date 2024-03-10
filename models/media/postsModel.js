const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: String, 
});

const imageSchema = new mongoose.Schema({
  "9_16": [String],
  "16_9": [String],
  "1_1": [String],
});

const hostSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: String,
});

const contentSchema = new mongoose.Schema({
  media: mediaSchema,
  image: imageSchema,
  host: hostSchema, 
});

const postSchema = new mongoose.Schema({
  kind: {
    type: String,
    required: true,
    enum: ['Stream', 'Podcast', 'Short', 'Photos', 'YTLiveTV', 'YTLiveView'],
  },
  tags: [String],
  likes: {
    type: Number,
    default: 0,
  },
  content: contentSchema,
}, {
  timestamps: { createdAt: 'created_at' }, 
  versionKey: false,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
