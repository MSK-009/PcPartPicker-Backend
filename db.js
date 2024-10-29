const mongoose = require('mongoose')
require('dotenv').config();

const URI = process.env.mongoDB_URI
const connectToMongo = async () => {
    mongoose.connect(URI)
    console.log('HI')
}

module.exports = connectToMongo;