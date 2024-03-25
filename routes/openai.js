const express = require('express');
const router = express.Router();
require('dotenv').config();
const { OpenAI } = require('openai');

const openai = new OpenAI(process.env.OPENAI_API_KEY);

router.post('/generate', async (req, res) => {
  try {
    const messages = req.body.messages;
    if (!messages) {
      return res.status(400).json({ error: 'No messages provided' });
    }

  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: messages }],
    model: "gpt-3.5-turbo",
  });


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
