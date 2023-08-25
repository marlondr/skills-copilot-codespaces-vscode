// Create web server
// 1. npm init -y
// 2. npm install express
// 3. node comments.js
// 4. Open browser and go to http://localhost:3000/comments

const express = require("express");
const app = express();

app.use(express.json());

const comments = [
  { id: 1, comment: "Comment 1" },
  { id: 2, comment: "Comment 2" },
  { id: 3, comment: "Comment 3" },
  { id: 4, comment: "Comment 4" },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/comments", (req, res) => {
  res.send(comments);
});

app.get("/comments/:id", (req, res) => {
  const comment = comments.find((c) => c.id === parseInt(req.params.id));
  if (!comment) res.status(404).send("The comment with the given ID was not found.");
  res.send(comment);
});

app.post("/comments", (req, res) => {
  const comment = {
    id: comments.length + 1,
    comment: req.body.comment,
  };
  comments.push(comment);
  res.send(comment);
});

app.put("/comments/:id", (req, res) => {
  const comment = comments.find((c) => c.id === parseInt(req.params.id));
  if (!comment) res.status(404).send("The comment with the given ID was not found.");

  comment.comment = req.body.comment;
  res.send(comment);
});

app.delete("/comments/:id", (req, res) => {
  const comment = comments.find((c) => c.id === parseInt(req.params.id));
  if (!comment) res.status(404).send("The comment with the given ID was not found.");

  const index = comments.indexOf(comment);
  comments.splice(index, 1);

  res.send(comment);
});

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});