const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const promotionsSchema = new Schema({
    users: {type:Array, required: true},
    content: {type:String, required:true}
});

module.exports = mongoose.model('Promotions', promotionsSchema);