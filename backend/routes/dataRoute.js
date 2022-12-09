const express = require("express");
const { dataComment,getComments,getAllComments, voteComment, deleteComment } = require("../controllers/dataController");
const { isAuthenticatedUser } = require("../middlewares/auth");
const router = express.Router();
const app= express();
app.use(express.json());

router.route("/comment").post(isAuthenticatedUser,dataComment);
router.route("/comment_response/mine").get(isAuthenticatedUser,getComments);
router.route("/comment_response").get(isAuthenticatedUser,getAllComments);
router.route("/vote/:id").put(isAuthenticatedUser,voteComment);
router.route("/delete/:id").delete(isAuthenticatedUser,deleteComment);
module.exports = router;
