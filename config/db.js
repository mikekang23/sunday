//bring in mongoose.
const mongoose = require('mongoose')

const config = require('config')

//because we probably don't want to include the config variables in our git
const db = config.get('mongoURI')

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    console.log('MongoDB is now connected =O)')
  } catch(err) {
    console.log(err.message);
  }
}

module.exports = connectDB;
