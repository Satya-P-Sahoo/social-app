const express = require("express");
const dateFormat = require("date-format");

const app = express();
const PORT = 3000 || process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello World!</h1>");
});

app.get("/api/v1/instagram", (req, res) => {
  const instagramInfo = {
    username: "Satya",
    followers: 10,
    follows: 100,
    date: dateFormat.asString("dd/MM/yyyy - hh:mm:ss", new Date()),
  };

  res.status(200).json(instagramInfo);
});

app.get("/api/v1/facebook", (req, res) => {
  const facebookInfo = {
    username: "Satya",
    followers: 55,
    follows: 15,
    date: dateFormat.asString("dd/MM/yyyy - hh:mm:ss", new Date()),
  };

  res.status(200).json(facebookInfo);
});

app.get("/api/v1/linkedin", (req, res) => {
  const linkedInInfo = {
    username: "Satya Prakash Sahoo",
    followers: 20,
    follows: 150,
    date: dateFormat.asString("dd/MM/yyyy - hh:mm:ss", new Date()),
  };

  res.status(200).json(linkedInInfo);
});

app.get("/api/v1/:token", (req, res) => {
  const token = req.params.token;
  console.log(token);
  res.status(200).json({ token });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
