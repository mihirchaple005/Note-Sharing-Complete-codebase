import mongoose from "mongoose"
import { Notes } from "./noteModels";
import { User } from "./userModels";

const reviewModel = new mongoose.Schema({
    review:{
        type:String,
    },
    notesId : {
        type : mongoose.Types.ObjectId,
        ref : Notes,
        required : true
    },
    username:{
        type:mongoose.Types.ObjectId,
        ref: User,
        required:true
    },
    rating:{
        type:Number,
        default:0
    }
});
export const Review = mongoose.model("Review",reviewModel)