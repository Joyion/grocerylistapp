const mongoose = require("mongoose");


const listSchema = new mongoose.Schema(  
    {
    name: {type: String},
    type: {type: String},
    img: {type: String},
    count: {type: Number}
})

module.exports = mongoose.model('List', listSchema);