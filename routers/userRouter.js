import express from 'express';
import { changePassword, editProfile, userDetail, user } from '../controllers/userController';
import routes from './routes';
import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.userDetail(), onlyPrivate, userDetail)
userRouter.get(routes.user, user)
userRouter.get(routes.editProfile, onlyPrivate, editProfile)
userRouter.get(routes.changePassword, onlyPrivate, changePassword)

export default userRouter;