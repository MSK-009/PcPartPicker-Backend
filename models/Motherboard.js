const mongoose = require('mongoose');

const { Schema } = mongoose;

const MotherboardSchema = new Schema({
    Price: {
        type: String,
        require: true
    },
    Socket: {
        type: String,
        require: true
    },
    Chipset: {
        type: String,
        require: true
    },
    FormFactor: {
        type: String,
        require: true
    },
    Ramslots: {
        type: String,
        require: true
    },
    Memorytype: {
        type: String,
        require: true
    },
    Manufacturer: {
        type: String,
        require: true
    },
    Image: {
        type: String,
        require: true
    }
});


module.exports = mongoose.model('motherboard', MotherboardSchema)