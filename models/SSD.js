const mongoose = require('mongoose');

const { Schema } = mongoose;

const SSDSchema = new Schema({
    SSD_name: {
        type: String,
        require: true
    },
    Format: {
        type: String,
        require: true
    },
    Protocol: {
        type: String,
        require: true
    },
    Capacity: {
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


module.exports = mongoose.model('ssd', SSDSchema)