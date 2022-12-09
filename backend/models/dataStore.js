const mongoose = require('mongoose');
const express = require('express');
const app= express();
app.use(express.json());

const Comments = new mongoose.Schema({
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      roll_number: {
        type: String,
        required: true,
      },
      phone_no: {
        type: Number,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      gender: {
        type: String,
        required: true,
      },
    comment :
    {
        type:String,
        required:true,
    },
    voteCount :
    {
      type:Number,
      default:0,
    },
    voting :[
      {
      id:{
      type:mongoose.Schema.ObjectId,
      ref:"User",
      required:true,
    },
    name:{
      type : String,
      required:true,
    },
    vote:{
      type : String,
      required:true
    }

}]
  }
);

module.exports = mongoose.model("Comments", Comments);