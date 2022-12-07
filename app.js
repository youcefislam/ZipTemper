const express = require("express"),
  path = require("path"),
  zipCodes = require("zipcodes");

const { getWeather } = require("./utilities");

const app = express();

app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get(/^\/api\/v1\/(\d{5})$/, async (req, res, next) => {
  try {
    const code = parseInt(req.params[0]);
    const city = zipCodes.lookup(code);
    if (!city) return next();
    const { latitude, longitude } = city;
    const weather = await getWeather(latitude, longitude);
    res.send(weather);
  } catch (error) {
    res.sendStatus(500);
  }
});

app.use((req, res) => res.status(404).render("404"));

app.listen(3000);
