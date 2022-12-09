const express = require('express');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const Data = require('../models/dataStore');
const user = require('../models/usermodel');
const app= express();
app.use(express.json());

exports.dataComment= catchAsyncErrors(async(req, res, err) => {
    //console.log("hai");
   // console.log(req.body);
    const {comment}= req.body;

    const data = Data.create(
      {
       user : req.user._id,
       name : req.user.name,
       roll_number : req.user.roll_number,
       phone_no : req.user.phone_no,
       email:req.user.email,
       gender:req.user.gender,
       comment
     });
     res.status(201).json({
       success: true,
       data,
     });    
});
exports.getComments = catchAsyncErrors(async(req,res,next) => {
    const roll_no = req.user.roll_number;
    var sort = {voteCount : -1};
   const data=await Data.find({roll_number:roll_no}).sort(sort);
   res.status(201).json({
    success:true,
    data,
   });
});
exports.getAllComments = catchAsyncErrors(async(req,res,next) => {
  var sort = {voteCount : -1};
   const data=await Data.find().sort(sort);
   res.status(201).json({
    success:true,
    data,
   });
});

exports.voteComment = catchAsyncErrors(async (req, res, next) => {
  const {vote} = req.body;
//  console.log(req.params.toString());
  const {id} = req.params;
  console.log(vote);
  console.log(id);
  const review = {
    user: req.user._id,
    voteCount : req.voteCount
  };

// console.log(review.vote);
  const comment = await Data.findByIdAndUpdate({_id:id});
 // console.log(comment);
  if(vote === "upvote")
  {
    comment.voteCount +=1;
  }
  if(vote === "downvote")
  {
    comment.voteCount -= 1;
  }
  
  comment.save()
  res.status(200).json({
    success: true,
  });
});

exports.deleteComment = catchAsyncErrors(async(req,res,next) =>{

  const {id} = req.params;
  const data =await  Data.find();

  const comment = await Data.findByIdAndDelete(id);

  return res.status(201).json({
    message:"success delete",
    comment
  });

  data.save();


});
