const express = require("express");
const mongoose = require("mongoose");
const { PORT = 3000 } = process.env;
const app = express();

mongoose
  .connect(
    "mongodb+srv://gabriel:tripleten1234@cluster0.xjq4z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Error in MongoDB connection", err));

const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");

app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: "66d8e4ea387f674ba2f34fe4",
  };

  next();
});

app.use("/users", usersRouter);
app.use("/cards", cardsRouter);

app.use((req, res) => {
  res.status(400).json({ message: "Resource not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
