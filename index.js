require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require("path")
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "views", "dist")));

// Define UserModel for testimonials
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    testimonial: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const UserModel = mongoose.model('testimonial', userSchema);

// Routes
app.get("/api/testimonials", async (req, res) => {
    try {
        let data = await UserModel.find();
        res.status(200).send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
});

app.get("/api/users", async (req, res) => {
    try {
        let data = await UserModel.find();
        res.status(200).send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
});

app.get("/api/teams", async (req, res) => {
    try {
        let data = await UserModel.find();
        res.status(200).send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
});

app.get("/api/slide", async (req, res) => {
    try {
        let data = await UserModel.find();
        res.status(200).send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
});

app.get("/api/gallery", async (req, res) => {
    try {
        let data = await UserModel.find();
        res.status(200).send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
});

app.get("/api/slider", async (req, res) => {
    try {
        let data = await UserModel.find();
        res.status(200).send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
});

app.get("/api/services", async (req, res) => {
    try {
        let data = await UserModel.find();
        res.status(200).send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Internal Server Error" });
    }
});

app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname, "views", "dist", "index.html"));
})
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
