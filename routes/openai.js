const express = require('express');
const router = express.Router();
require('dotenv').config();
const { OpenAI } = require('openai');

// 直接在构造函数中使用环境变量提供的 API 密钥
const openai = new OpenAI(process.env.OPENAI_API_KEY);

router.post('/generate', async (req, res) => {
  try {
    // 从请求体中获取 messages
    const messages = req.body.messages;
    if (!messages) {
      return res.status(400).json({ error: 'No messages provided' });
    }

    // 调用 OpenAI API
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: messages }],
    model: "gpt-3.5-turbo",
  });

    // 发送响应
    res.json({ response: completion.choices[0] });
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    res.status(500).json({ error: 'Error processing your request' });
  }
});

module.exports = router;























// const express = require('express');
// const router = express.Router();
// require('dotenv').config();

// // 直接从 openai 导入 OpenAI 类
// const { OpenAI } = require('openai');

// const openai = new OpenAI();

// async function main() {
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: "system", content: "AR好吃" }],
//     model: "gpt-3.5-turbo",
//   });

//   console.log(completion.choices[0]);
// }

// main();

// module.exports = router;
