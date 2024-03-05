const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  img: {
    type: String,
    required: [true, 'Image URL is required']
  }
});

const storySchema = new mongoose.Schema({
  created_at: {
    type: Date,
    default: Date.now
  },
  brick: {
    type: String,
    required: [true, 'Brick is required']
  },
  tags: {
    type: [String],
  },
  content: contentSchema,
},
{
  versionKey: false
});


const Story = mongoose.model('Story', storySchema);

module.exports = Story;
