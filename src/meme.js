const { Configuration, OpenAIApi } = require("openai");
const dotenv = require('dotenv');
dotenv.config();
async function getMemeIdea(){
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "generate a funny meme ideas seprated into caption and image components",
    temperature: 0.6,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  });
  return response.data.data;
}
getMemeIdea();