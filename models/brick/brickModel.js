const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true, match: [/^https?:\/\/.+/i, 'Invalid URL format'] } 
});

const imageSizesSchema = new mongoose.Schema({
  "9_16": [{ type: String, match: [/^https?:\/\/.+/i, 'Invalid URL format'] }],
  "16_9": [{ type: String, match: [/^https?:\/\/.+/i, 'Invalid URL format'] }],
  "1_1": [{ type: String, match: [/^https?:\/\/.+/i, 'Invalid URL format'] }]
});

const contentSchema = new mongoose.Schema({
  media: { type: mediaSchema, required: true },
  type: { type: String, required: true, enum: ['Stream', 'Story', 'Photos', ''] },
  channel: { type: String, required: true },
  image: { type: imageSizesSchema, required: true }
});

const brickSchema = new mongoose.Schema({
  kind: { type: String, required: [true, 'Kind 未填寫'] },
  tags: { type: [String], required: [true, 'Tags 未填寫'] },
  content: { type: contentSchema, required: true }
}, 
{ 
  versionKey: false
}); 


const Brick = mongoose.model('Brick', brickSchema);

module.exports = Brick;



// const mongoose = require('mongoose')
// const brickSchema = new mongoose.Schema(
//     {
//       content: {
//         type: String,
//         required: [true, 'Content 未填寫']
//       },
//       created_at: {
//         type: Date,
//         default: Date.now(),
//         select: false
//       },
//       kind: {
//         type: String,
//         required: [true, 'kind未填寫']
//       },
//       tags: {
//         type: String,
//         required: [true, 'tags未填寫']
//       },
//       likes: {
//         type:Number,
//         default:0
//       },
//       image: {
//         type:String,
//         default:""
//       },
//     }
// );
// const Post = mongoose.model('Post', postSchema);

// module.exports = Post;