const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); 
app.use(express.json());

let books = [
  { id: 1, title: "Atomic Habits", author: "James Clear" },
  { id: 2, title: "The Alchemist", author: "Paulo Coelho" }
];

app.get('/books', (req, res) => res.json(books));

app.post('/books', (req, res) => {
  const { title, author } = req.body;
  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ message: "Not found" });

  book.title = req.body.title || book.title;
  book.author = req.body.author || book.author;

  res.json(book);
});

app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);
  if (index === -1) return res.status(404).json({ message: "Not found" });

  const removed = books.splice(index, 1);
  res.json(removed[0]);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
