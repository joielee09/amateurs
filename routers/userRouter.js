import express from 'express';
import { changePassword, editProfile, userDetail, user } from '../controllers/userController';
import routes from './routes';

const userRouter = express.Router();

userRouter.get(routes.user, user)
userRouter.get(routes.editProfile, editProfile)
userRouter.get(routes.userDetail(), userDetail)
userRouter.get(routes.changePassword, changePassword)

export default userRouter;