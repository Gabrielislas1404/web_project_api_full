const express = require("express");
const mongoose = require("mongoose");
const { errors } = require("celebrate");
const errorHandler = require("./middleware/errorHandler");
const { requestLogger, errorLogger } = require("./middleware/logger");
/* const auth = require("./middleware/auth"); */
require("dotenv").config();
/* const cors = require("cors"); */

const app = express();

console.log(process.env.JWT_SECRET);

const allowedCors = [
  "http://localhost:3000",
  "https://gabriel14.mooo.com",
  "https://www.gabriel14.mooo.com",
];

const corsOptions = { origin: allowedCors };

app.use(cors());

app.use((req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const DEFAULT_ALLOWED_METHODS = "GET,HEAD,PUT,PATCH,POST,DELETE";
  if (allowedCors.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  if (method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", DEFAULT_ALLOWED_METHODS);
    const requestHeaders = req.headers["access-control-request-headers"];
    res.header("Access-Control-Allow-Headers", requestHeaders);
    return res.end();
  }
  next();
});

const { PORT = 3000 } = process.env;

mongoose
  .connect(
    "mongodb+srv://gabriel:tripleten1234@cluster0.xjq4z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Error in MongoDB connection", err));

const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(requestLogger);

app.use(usersRouter);
app.use("/cards", cardsRouter);

/* app.use(auth); */
app.use(errorLogger);
app.use(errorHandler);

app.use(errors());

app.get("/*", (req, res) => {
  res.status(404).send({
    message: "NOT FOUND",
  });
});

app.post("/*", (req, res) => {
  res.status(404).send({ message: "NOT FOUND" });
});

/* app.use("/", (req, res) => {
  res.status(400).json({ message: "Resource not found" });
}); */

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
