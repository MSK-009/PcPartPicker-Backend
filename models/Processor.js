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
    Base_clock: {
        type: String,
        require: true
    },
    Turbo_clock: {
        type: String,
        require: true
    },
    Cores: {
        type: String,
        require: true
    },
    Threads: {
        type: String,
        require: true
    },
    Price: {
        type: String,
        require: true
    },
    Released: {
        type: String,
        require: true
    }
});


module.exports = mongoose.model('processors', CPUSchema)