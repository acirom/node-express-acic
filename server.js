const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

let books = [];

const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello from the server acic test!');
});

app.get('/health', (req, res) => {
  res.sendStatus(200);
});

app.post('/book', (req, res) => {
  const book = req.body;
  books.push(book);
  //console.log(book);
  res.json(book);
  //res.send('Book was added to the database');
  // res.json({
  //   number: 1
  // });
  //res.send('{"success" : "Updated Successfully"' & book.id & ', "status" : 200}');

});

app.get('/books', (req, res) => {
  res.json(books);
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
