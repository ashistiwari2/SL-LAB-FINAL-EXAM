const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const MobileRoute = require("./routes/mobile.routes");

mongoose
  .connect(
    "mongodb+srv://ashis_tiwari:GCLCeAgGxoEzU81A@cluster0.bmwnp.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to database successfully"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.use("/api/mobileUse", MobileRoute);

const PORT = 3000;

app.listen(PORT, console.log(`Server started at port: ${PORT}`));
