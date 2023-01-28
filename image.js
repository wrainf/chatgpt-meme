const { Configuration, OpenAIApi } = require("openai");
const dotenv = require('dotenv');
dotenv.config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
async function createImage(prompt) {
  const response = await openai.createImage({
    prompt: prompt,
    n: 2,
    size: "256x256",
  });
  console.log(response.data.data[0].url)
  return response.data.data[0].url
}

module.exports = { createImage };

