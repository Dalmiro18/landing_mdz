const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const UserSchema = new Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: false},
    number: {type: Number, required: true},
    email: {type: String, required: true},
    location:{type: String, required:false},
    question: {type: String, required: false}
});

module.exports = mongoose.model('Schema', UserSchema);
