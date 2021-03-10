import express from "express";
import {
  changePassword,
  getEditProfile,
  postEditProfile,
  userDetail,
  user
} from "../controllers/userController";
import routes from "./routes";
import { onlyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.userDetail(), onlyPrivate, userDetail);
userRouter.get(routes.user, user);
userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.get(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

userRouter.get(routes.changePassword, onlyPrivate, changePassword);

export default userRouter;
