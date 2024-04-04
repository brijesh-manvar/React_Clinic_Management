const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const { Schema } = mongoose;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/clinc', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

const userSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  password: String
});

const User = mongoose.model("User", userSchema);

// Endpoint to create a new user
app.post("/api/users", async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const user = new User({ name, email, phone, password });
    const result = await user.save();
    res.status(201).json(result);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Could not create user" });
  }
});

// Endpoint to get all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error getting users:", error);
    res.status(500).json({ error: "Could not get users" });
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
