import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/userModels.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js"


const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId)
    
        const accessToken = await user.generateAccessToken()
        const refreshToken = await   user.generateRefreshToken()
    
        user.refreshToken = refreshToken
        await user.save({validateBeforeSave: false})
    
        return {accessToken, refreshToken}
    } catch (error) {
        throw new ApiError(500, "something went wrong while generatong Tokens")
    }

}

const registerUser = asyncHandler(async (req, res) => {
    // sabse pahale fields ki value lenege
    // check karenge valuse hai hai yaa nahi
    // phie yee check kkaro ki pahale se user ragistered tho nahi hai
    // phir file upload krne wale seen ko handle karenge
    // type of user
    // saab sahi hai tho create user krlo and database me store krr lo

    const {username, branch, college, semester, contact, password, checkPassword, email } = req.body

    if (
        [username, branch, college, semester, contact, password, checkPassword, email].some((field) => {
            field?.trim == ""
        })
    ){
        throw new ApiError(400 , "All fields are required")
    }

    const existedUser = await User.findOne({
        $or : [{username}, {contact}, {email}]
    })

    if (existedUser) {
        throw new ApiError(400, "User alreeady exists try login or register with new credentials")
    }

    if (password != checkPassword) {
        throw new ApiError(400, "Password and Check Password must be same")
    }

    const profilePicPath = req.files?.profilePic[0].path

    if (!profilePicPath) {
        throw new ApiError(400 , "Profile picture is required")
    }

    console.log(profilePicPath);

    const profilePic = await uploadOnCloudinary(profilePicPath)

    console.log(profilePic);

    if(!profilePic) {
        throw new ApiError(400, "Profile pic is required")
    }

    // type of user ka code likhna baki hai

    const user = await User.create({
        username : username.toLowerCase(),
        branch,
        college, 
        semester, 
        contact : contact.toString(), 
        password, 
        email,
        profilePic : profilePic.url,
    })

    

    const createdUser = await User.findById(user._id).select(
        "-password"  // "-refresh token" code nahi dala hai kyuki token ka code likhna abhi baki hai
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while accessing user fromm database")
    }

    console.log("user registered successfully")

    return res.status(200).json(
        new ApiResponse(200, createdUser, "User created successfully")
    )
    
    
})

export { registerUser }

