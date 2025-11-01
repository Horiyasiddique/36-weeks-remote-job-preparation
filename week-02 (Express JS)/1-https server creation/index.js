//importing express JS
const express = require("express");

//store it in a variable
const app = express();

const port = 3000;

// object to pass in json
let user = {
  name: "Hooriya",
  password: "123456",
  gender: "female",
  age: 15,
};

// using listen method of express JS
app.listen(port, () => {
  console.log(`project is running on PORT: ${port}`);
});

//sending response in HTML
app.get("/", (request, response) => {
  response.send("<h1>Hello Express JS</h1>");
});

//sending response in text
app.get("/creator", (request, response) => {
  response.send("this server is created by Hooriya Siddiqui");
});

//sending response in JSON
app.get("/user/profile", (request, response) => {
  response.json({ user });
});
