import mongoose from "mongoose";
import { Review } from "./reviewModel";

const productSchema =new mongoose.Schema({
  name:{
    type:String,
    required:true
  }, 
  description:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    requied:true
  },
  quantity:{
    type:Number,
    required:true,
  },
  image:{
    data:Buffer,
    contentType:String
  },
  productReview : {
    type : mongoose.Types.ObjectId,
    ref : Review,
  }
 })

export default mongoose.model("Products",productSchema)