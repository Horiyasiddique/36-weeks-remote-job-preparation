const express = require("express");

const app = express();

app.use(express.json());

const port = 3000;

//1. take input using body
app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(404).json({ mssg: "email and password not found" });
  }

  console.log(email, password);

  res.status(200).json({ mssg: "I got the data" });
});

//2. take input using headers
app.get("/user/profile", (req, res) => {
  const token = req.headers["authorization"];

  if (!token) {
    res.status(400).send("Token not found");
  }

  console.log(token);

  res
    .status(200)
    .json({ mssg: "I got the the token here is your profile page" });
});

//3. Take input using params
const videos = [
  {
    id: 123,
    title: "Learn Express with Hooriya",
    description: "complete 4 hours Express JS course with real time projects",
  },
  {
    id: 456,
    title: "Ducky Bhai arrest",
    description:
      "Ducky bhai got arrested due to promoting batting apps in his VLOGS",
  },
  {
    id: 789,
    title: "Complete roadmap of AI/ML for 2026",
    description: "here is your roadmap to master AI/ML in 2026",
  },
  {
    id: 198,
    title: "Namaz Tafseer",
    description: "Be closer to Allah",
  },
];

app.get("/videos/:id", (req, res) => {
  const videoID = Number(req.params.id);
  const foundVideo = videos.find((singleVideo) => singleVideo.id === videoID);
  if (!foundVideo) {
    res.status(400).json({ mssg: "Video not found!" });
  }

  res.status(200).json({ foundVideo });
});

//4. take inputs using query
const citiesWeather = [
  {
    city: "isb",
    temprature: 22,
  },
  {
    city: "karachi",
    temprature: 19,
  },
  {
    city: "mdn",
    temprature: -10,
  },
  {
    city: "quetta",
    temprature: 30,
  },
  {
    city: "sawat",
    temprature: -2,
  },
  {
    city: "murree",
    temprature: -10,
  },
];

app.get("/api/weather", (req, res) => {
  const availableCity = req.query.city;
  const foundCity = citiesWeather.find(
    (singleCity) => singleCity.city === availableCity
  );
  if (!foundCity) {
    res.status(400).json({ mssg: "city not found" });
  }

  res.status(200).json({ foundCity });
});

app.listen(port, () => {
  console.log(`app is listening on ${port} port `);
});
