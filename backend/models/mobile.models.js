const mongoose = require("mongoose");

const Mobileusage = mongoose.Schema({
 detail:{ username: {
    type: String,
    required: true
  },
  total_time:{
    type:Number,
    required:true
  },
  date:{
    type:Date,
    required:true
  },
  mood:{
    type:String,
    required:true
  }}
});

module.exports = mongoose.model("detail", Mobileusage);
