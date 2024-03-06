const mongoose = require('mongoose');

const brickSchema = new mongoose.Schema({
  created_at: {
    type: Date,
    default: Date.now
  },
  brickName: { 
    type: String,
    required: [true, 'brickName 未填寫']
  },
  title: { 
    type: String,
    required: [true, 'title 未填寫']
  },
  image: { 
    type: String,
    required: [true, 'title 未填寫']
  },
  content: [{ 
    type: mongoose.Schema.ObjectId,
    ref: "YTLiveView",
    required: [true, 'ID 未填寫']
  }]
}, 
{ 
  versionKey: false
});



const Brick = mongoose.model('Brick', brickSchema);

module.exports = Brick;

