const express = require("express");
const router = express.Router();



// get all grocery list items
router.get('/', function(req, res){
  
})


// add item to grocery list
router.post('/', function(req, res){
    const items = req.body;
    res.send(items);
})

// update item quantity or type
router.put('/itemId', function(req, res){

})

// delete item from list 
router.delete('/:itemId', function(req, res){
    res.send("delete item" + req.params.id);
})



module.exports = router;