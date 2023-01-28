const { getMemeIdea } = require('./meme');
const { createImage } = require('./image');
const dotenv = require('dotenv');
dotenv.config();

const content = document.findElementByID('content');

async function makeMeme() {
  const post = document.createElement('div');
  const caption = document.createElement('h3');
  const image = document.createElement('img');

  const ideas = await getMemeIdea()
  caption.textContent = ideas[0];
  const imageURL = await createImage(ideas[1])
  
  image.src = imageURL;
  post.appendChild(caption);
  post.appendChild(image);
  content.appendChild(post)
}

makeMeme();