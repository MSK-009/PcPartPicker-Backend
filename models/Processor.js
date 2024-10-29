const mongoose = require('mongoose');

const { Schema } = mongoose;

const CPUSchema = new Schema({
    CPU_name: {
        type: String,
        require: true
    },
    Socket: {
        type: String,
        require: true
    },
    base_clock: {
        type: String,
        require: true
    },
    turbo_clock: {
        type: String,
        require: true
    },
    Cores: {
        type: String,
        require: true
    },
    threads: {
        type: String,
        require: true
    },
    Price: {
        type: String,
        require: true
    }
});


module.exports = mongoose.model('processor', CPUSchema)