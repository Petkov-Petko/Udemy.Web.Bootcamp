import express from "express";

const app = express();
const port = 3000;
app.listen(3000, () => {
  console.log(`Server running on port ${port}`);
});

//-----get--------------------------------------

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1>");
});


