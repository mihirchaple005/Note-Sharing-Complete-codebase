import { Router } from "express";
import { saveReviewFromUser } from "../controllers/reviewController.js"

const router = Router();

router.route("/save-review",saveReviewFromUser)

export default router;