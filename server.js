//bring in express
const express = require('express');
const app = express();

// connect to the database
const connectDB = require('./config/db')
connectDB();

// review this part. Init middleware. How does this init middleware
app.use(express.json({extended:false}))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api', (req, res) => {
  res.json({"msg": "this is ze message"})
});

//Define Routes
// app.use('/api/something', require('./routes/api/something'))
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)});
