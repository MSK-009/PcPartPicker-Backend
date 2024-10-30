const mongoose = require('mongoose');

const { Schema } = mongoose;

const RAMSchema = new Schema({
    RAM_name: {
        type: String,
        require: true
    },
    Latency: {
        type: String,
        require: true
    },
    Multicore_RW: {
        type: String,
        require: true
    },
    Singlecore_RW: {
        type: String,
        require: true
    },
    Released: {
        type: String,
        require: true
    },
    Price: {
        type: String,
        require: true
    },
    Image: {
        type: String,
        require: true
    }
});


module.exports = mongoose.model('ram', RAMSchema)