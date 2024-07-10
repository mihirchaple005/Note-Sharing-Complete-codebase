import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import  jwt  from "jsonwebtoken";


//user-details initialisation
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true
    },
    semester:{
        type:Number,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    profilePic:{
        data:Buffer,
        contentType:String
    },
    user_type:{
        type : String,
        default:"Student"
    },
    refreshToken : {
        type : String
    }
},{timestamps:true});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()
    
    this.password = bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function() {
    return jwt.sign(
        {
            _id : this._id,
            username : this.username,
            email : this.email,
            type : this.user_type
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function() {
    return jwt.sign(
        {
            _id : this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn : process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}



export const User = mongoose.model("User", userSchema)