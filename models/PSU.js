const mongoose = require('mongoose');

const { Schema } = mongoose;

const PSUSchema = new Schema({
    PSU_name: {
        type: String,
        require: true
    },
    Size: {
        type: String,
        require: true
    },
    Wattage: {
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


module.exports = mongoose.model('psu', PSUSchema)