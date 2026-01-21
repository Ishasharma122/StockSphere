require("dotenv").config();
 
 const express = require("express");
 const mongoose = require("mongoose");
 const bodyParser = require("body-parser");
 const cors = require("cors");
 const cookieParser = require("cookie-parser");
 const authRoute = require("./Routes/AuthRoute");
 
 const { HoldingsModel } = require("./model/HoldingsModel");
 
 const { PositionsModel } = require("./model/PositionsModel");
 const { OrdersModel } = require("./model/OrdersModel");
 
 const PORT = process.env.PORT || 3002;
 const uri = process.env.MONGO_URL;
 
 const app = express();
 const allowedOrigins = [
  "https://stocksphere-frontend.onrender.com",
   "https://stocksphere-dashboard-ko13.onrender.com"
];
 app.use(
  cors({
    origin:  allowedOrigins, 
    methods: "GET,POST,PUT,DELETE",
    credentials: true, 
  })
);
 app.use(bodyParser.json());
  app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

  
app.use("/", authRoute);

 app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});


app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    const quantity = parseInt(qty);
    if (mode === "SELL") {
      const existingOrder = await OrdersModel.findOne({
        name: name,
        mode: "BUY"
      });
      if (!existingOrder) {
        return res.status(404).json({ message: 'No matching BUY order.' });
      }
      const newQty = existingOrder.qty - quantity;
      if (newQty <= 0) {
        await OrdersModel.deleteOne({ _id: existingOrder._id });
      } else {
        await OrdersModel.updateOne(
          { _id: existingOrder._id },
          { $set: { qty: newQty } }
        );
      }

    } else {
      const newOrder = new OrdersModel({
        name,
        qty: quantity, 
        price,
        mode,
      });
      await newOrder.save();
    }

  } catch (error) {
    console.error(error);
  }
});

 app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    mongoose.connect(uri);
    console.log("DB started!");
  });
