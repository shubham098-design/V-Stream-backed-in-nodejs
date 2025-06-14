const registerUser = require("../controllers/user.controllers");
const userRouter = require("express").Router();
const {upload} = require("../middlewares/multer.middlewares");


userRouter.route("/register").post(
    upload.fields([
        { name: "avatar", maxCount: 1 },
        { name: "coverImage", maxCount: 1 }
    ]),
    registerUser);

module.exports = userRouter;