import mongoose from "mongoose";
import { Review } from "./reviewModel";
import { User } from "./userModels";

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    username:{
        type:mongoose.Types.ObjectId,
        ref : User,
        required:true
    },
    cloud_link:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    branchname:{
        type:String,
        required:true
    },
    review : [
        {
            type : mongoose.Types.ObjectId,
            ref : Review,
            default : null
        }
    ],
    image:{
        data:Buffer,
        contentType:String
    }
},{timestamps:true})

export const Notes = mongoose.model("Notes",noteSchema)
