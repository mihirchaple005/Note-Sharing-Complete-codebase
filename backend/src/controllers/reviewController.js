import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { Review } from "../models/reviewModel";
import { Notes } from "../models/noteModels";

const saveReviewFromUser = asyncHandler(async(req, res) => {
    const {review} = req.body;
    const userId = req.user._id;
    const {cloudLink} = req.params // notes ki link melengi uss link ko noted model ke notes ke links re aggregated pipelies se match krna padenga 


    // Algo to find notes title : sabse pahale thp kahase milenga notesModel se
    // get notes id of the current notes from the current notes page 
    // find the matching notes id in notes model
    // then using some pipelines get the notes title
    // const notesTitle = ""  how can i get this its a goos question above id jho nikalegne usse hi haam notes ka title bhi malum krr sakte hai

    // error handling
    if ([review, cloudLink].some((field) => {
        field?.trim == ""
    })){
        throw new ApiError(404, "Review Field is empty")
    }

    if (!userId) {
        throw new ApiError(500, "Something went wrong while fetching user")
    }
 
        // notesId  lane ka baki hai // notesid ke liye eek middle ware hi bana lete bohot use hoga aise lagg raha hai
        



    const notesId = await Notes.aggregate([
        {
            $match : {
                cloud_link : cloudLink,
            }
        },
        {
            $project : {
                _id : 1,
            }
        }
    ])



    const createdReview = await  Review.create({
        review : review,
        notesId : notesId,
        username : username.toLowerCase(),
        rating
    })
return res.status(200).json(
    new ApiResponse(200, createdReview, "Review submitted successfully")
)


})


// this work will be done by aggrigated pipe lines in notes controller
// const fetchUserReview = asyncHandler( async(req, res) => {
//     // aggrigation pipelinens use karenge user me saare ke saare review daal ke front end me send krr denge

// })

export { saveReviewFromUser }