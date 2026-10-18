require('dotenv').config();
const cors = require("cors");
const bodyParser = require("body-parser");

const express = require("express");
const mongoose = require("mongoose");
const {HoldingsModel} = require("./model/HoldingsModel");
const {PositionModel} = require("./model/PositionModel");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGODB_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/allHoldings', async(req, res)=>{
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get('/allPositions', async(req, res)=>{
    let allPositions = await PositionModel.find({});
    res.json(allPositions);
});

app.listen(3002, ()=> {
    console.log("App started");
    mongoose.connect(url);
    console.log("DB connnected");
});