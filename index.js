require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require("path")
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const frontendapi = require('./routes/frontendapi.js');
const TestimonialModel = require('./models/TestimonialSchema.js');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware
app.use(cors());
app.use(express.json())
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'views',"dist")));
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store');
  next();
});

app.use('/', frontendapi);
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'views','dist','index.html'))
})
// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT;
app.listen(PORT,'0.0.0.0', () => console.log(`Server running on port ${PORT}`));
