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
  const result = formatResult(response)
  return result;
}

function formatResult(response) {
  const result = response.data.choices[0].text.split(/\n/);
  result.shift()
  result.shift()
  result[0] = removeInitial(result[0]);
  result[1] = removeInitial(result[1]);
  return result;
}

function removeInitial(word) {
  const colonIndex = word.indexOf(':')
  const final = word.slice(colonIndex+2)
  return final
}

module.exports = { getMemeIdea };

