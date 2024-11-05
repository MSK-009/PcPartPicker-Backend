const mongoose = require('mongoose');

const { Schema } = mongoose;

const CaseSchema = new Schema({
    Case_name: {
        type: String,
        require: true
    },
    Size: {
        type: String,
        require: true
    },
    Isolation: {
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


module.exports = mongoose.model('case', CaseSchema)