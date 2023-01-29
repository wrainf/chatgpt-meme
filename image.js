const { OpenAIApi } = require("openai");


async function createImage(prompt,configuration) {
  const openai = new OpenAIApi(configuration);
  try {
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "256x256",
    });
    console.log(response.data.data[0].url)
    return response.data.data[0].url
  } catch(e) {

    console.log(e.message)
    return "https://freesvg.org/img/Website-No-Image-Icon.png"
  }
  
}

module.exports = { createImage };


