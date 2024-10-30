const mongoose = require('mongoose')
require('dotenv').config();

const URI = process.env.mongoDB_URI
const connectToMongo = async (request, response) => {
    try {
        await mongoose.connect(URI)
        console.log('Connected to DB')
    }
    catch (err) {
        console.error("Connection Failed",err);
    }
}

module.exports = connectToMongo;