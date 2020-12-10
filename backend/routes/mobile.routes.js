const route = require("express").Router();

const Mobile = require("../models/mobile.models");

route.get("/",async (req, res) => {
  try {
    const foundmobileusage = await Mobile.find();
    res.json(foundmobileusage);
  } catch (err) {
    console.log(err)
  }

});



route.post("/", async (req, res) => {
  const username = req.body.username;
  const total_time=req.body.total_time;
  const date=req.body.date;
  const mood=req.body.mood;
  const mobileUsage = new Mobile({
    username:username,
    date:date,
    mood:mood,
    total_time:total_time
  })
  try {
    const savedUsage = await mobileUsage.save();
    res.json(savedUsage);
  } catch (err) {
    console.log(err);
  }

});



route.delete("/:id",async (req, res) => {
  const mobileId = req.params.id
  try {
    const deletedItem = await Mobile.deleteOne({_id: mobileId});
    res.json(deletedItem);
  } catch (err) {
    console.log(err)
  }
});

module.exports = route;
