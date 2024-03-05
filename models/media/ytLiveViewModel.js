const mongoose = require('mongoose');

const ytLiveViewSchema = new mongoose.Schema({
  kind: {
    type: String,
    required: [true, 'Kind field is required'],
    enum: ['Short', 'Photos', 'Podcast', 'YT', 'Stream']
  },
  tags: {
    type: [String],
    default: []
  },
  content: {
    media: {
      title: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    },
    host: {
      name: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    }
  }
});

const YtLiveView = mongoose.model('YtLiveView', ytLiveViewSchema);

module.exports = YtLiveView;
