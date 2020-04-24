import express from 'express';
import path from 'path';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 5200;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../', 'dist')));

app.get('/', (req, res) => {
  res.render('index', { answer: 'from the server' });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}. updated`);
});
