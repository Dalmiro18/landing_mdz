const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const ImageSchema = new Schema({
    path: {type: String, required: false},
})

module.exports = mongoose.model('Photos', ImageSchema)