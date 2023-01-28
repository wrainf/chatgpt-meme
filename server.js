const { getMemeIdea } = require('./meme');
const { createImage } = require('./image');
const express = require('express');
const dotenv = require('dotenv');

const app = express();
const port = process.env.PORT || 8080;
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.set('view engine', 'pug');

app.listen(port);
console.log('Server started at http://localhost:' + port);

dotenv.config();

app.get('/', async function(req,res) {
  const memes = []
  for (let index = 0; index < 5; index++) {
    const meme = []
    const memeIdea = await getMemeIdea();
    const imageURL = await createImage(memeIdea[1]);
    meme.push(memeIdea[0]);
    meme.push(imageURL)
    memes.push(meme)
  }
  
  res.render('index', {memes: memes})

})



