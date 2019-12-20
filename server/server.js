const express = require("express");
const app = express();
const cors = require("cors");
const path = require('path');
const publicPath = path.join(__dirname, "..", "dist");
const port = process.env.PORT || 5000
const mongoose = require("mongoose");
require("dotenv").config();
const seedb = require("./seed");

// authentication
const passport = require("passport");



app.use(express.json());
app.use(cors());
app.use(express.static(publicPath));

// put in env
const database = process.env.DATABASE;

mongoose.connect(database, 
    {dbName: "MyGroceryList", useNewUrlParser: true, 
    useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error"));
db.once('open', function(){
        console.log("Connected to Database");
    });

// create models
storeModel = require('./models/store.model');

// TO SEED DATABASE STORE 
// seedb();
const apiRoutes = require("./routes/api.list");
const storeRoutes = require("./routes/api.store");

app.use("/api/list", apiRoutes);
app.use("/api/store", storeRoutes);

app.post("/test", function(req, res){
    console.log(req.body);
})

// app.get("*", (req, res) => {
//     res.sendFile(path.join(publicPath, "index.html"));
// })


app.listen(port, () => {
    console.log("Server started on 5000");
})