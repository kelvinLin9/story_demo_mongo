const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  title: String,
  url: String
});

const imageSchema = new mongoose.Schema({
  "9_16": [String], 
  "16_9": [String],
  "1_1": [String]
});

const hostSchema = new mongoose.Schema({
  name: String,
  url: String
});

const contentSchema = new mongoose.Schema({
  media: mediaSchema,
  image: imageSchema,
  host: hostSchema
});

const photosSchema = new mongoose.Schema({
  created_at: {
    type: Date,
    default: Date.now
  },
  kind: {
    type: String,
    required: [true, 'Kind field is required'],
    enum: ['Photos']
  },
  tags: [String],
  content: contentSchema
}, {
  toJSON: { virtuals: true, versionKey: false },
  toObject: { virtuals: true, versionKey: false }
},
{
  versionKey: false
});

const Photos = mongoose.model('Photos', photosSchema);

module.exports = Photos;