const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const UserModel = require("./models/Users");
const PORT = process.env.PORT || 5000;
const connectDB = require("./db/connect");
const app = express();
app.use(cors());
app.use(express.json());

const start = async () => {
  try {
    await connectDB(process.env.MONGO_DB);
    app.get("/", (req, res) => {
      UserModel.find({})
        .then((users) => res.json(users))
        .catch((error) => res.json(error));
    });
    app.post("/createUser", (req, res) => {
      UserModel.create(req.body)
        .then((users) => res.json(users))
        .catch((err) => console.log(err));
    });
    app.get("/getUser/:id", (req, res) => {
      const id = req.params.id;
      UserModel.findById({ _id: id })
        .then((users) => res.json(users))
        .catch((error) => res.json(error));
    });
    app.put("/updateUser/:id", (req, res) => {
      const id = req.params.id;
      UserModel.findByIdAndUpdate(
        { _id: id },
        { name: req.body.name, email: req.body.email, age: req.body.age }
      )
        .then((users) => res.json(users))
        .catch((error) => res.json(error));
    });
    app.delete("/deleteUser/:id", (req, res) => {
      const id = req.params.id;
      UserModel.findByIdAndDelete({ _id: id })
        .then((users) => res.json(users))
        .catch((error) => res.json(error));
    });
    app.listen(PORT, () => {
      console.log("Server is running at", PORT);
    });
  } catch (error) {
    console.log("Error to connect database ->", error);
  }
};
start();
