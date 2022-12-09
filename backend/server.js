const { config } = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");
const env = config({ path: "backend/config/config.env" });
const cors = require('cors');
const port = process.env.PORT;
const app = express();
app.use(express.json());

app.use(bodyparser.json());
app.use(cookieParser());
app.use(bodyparser.urlencoded({ extended: true }));

const connectDB = () => {
    mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true}).then((data) => {
            return console.log(`db connected to:${data.connection.host}`);
    });
}

connectDB();
const server = app.listen(port,()=>{
    console.log(`Server is working on http://localhost:${port}`);
});

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(bodyparser.urlencoded({extended:false}));

//api
const data=require('./routes/dataRoute');
const user=require('./routes/userRoute');
app.use('/api/v1',data);
app.use('/api/v1',user);

app.use(cors(
  {
  orign:'*',
  credentials: true,
  }));

  process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });


