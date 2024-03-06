const mongoose = require('mongoose');

const ytLiveViewSchema = new mongoose.Schema({
  created_at: {
    type: Date,
    default: Date.now
  },
  kind: {
    type: String,
    required: [true, 'Kind field is required'],
    enum: ['YTLiveView', 'YTLiveTV']
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
},
{
  versionKey: false
});

const YTLiveView = mongoose.model('YTLiveView', ytLiveViewSchema);

module.exports = YTLiveView;
