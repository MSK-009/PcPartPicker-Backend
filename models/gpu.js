const mongoose = require('mongoose');

const { Schema } = mongoose;

const GPUSchema = new Schema({
    GPU_name: {
        type: String,
        require: true
    },
    Series: {
        type: String,
        require: true
    },
    TDP: {
        type: String,
        require: true
    },
    VRAM: {
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


module.exports = mongoose.model('gpu', GPUSchema)