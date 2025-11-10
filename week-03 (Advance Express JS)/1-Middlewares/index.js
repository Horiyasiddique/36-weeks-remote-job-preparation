const express = require("express");

const app = express();

const port = 3000;

// const middleWare = (req, res, next) => {
//   console.log("Middleware function is running");
//   next();
// };

app.get("/", (req, res) => {
  console.log("server start");
  res.send("<h1 style='color: red;'>server is listening</h1>");
});

// app.use(middleWare)

// app.get("/profile", (req, res) => {
//     console.log("profile page")
//   res.send("<h1 style='color: red;'>Hey! this is profile page!!</h1>");
// });

// app.get("/about", (req, res) => {
//     console.log("about page")
//   res.send("<h1 style='color: green;'>Hey! this is About page!!</h1>");
// });

app.get("/login", (req, res) => {
  const data = req.body;
  res.json({
    token: "1234tgbnmy",
  });
});

const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    res.status(400).json({ mssg: "token not found!" });
  }
  next();
};

app.get("/profile", authMiddleware, (req, res) => {
  res.json({
    user: {
      username: "hooriya",
      email: "hoor@gmail.com",
    },
  });
});

app.listen(port, () => {
  console.log("server is listening at port 3000");
});
