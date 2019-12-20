const express = require("express");
const router = express.Router();
const storeModel = require("../models/store.model");


router.get('/', function(req, res){
    storeModel.find({}).sort({name: "asc"})
    .then(items => res.status(200).json(items))
    .catch(error => console.log(error))
    
})

module.exports = router;