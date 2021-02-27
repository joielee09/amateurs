import express from 'express';
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  logout,
  // githubLogin,
  // postGithubLogIn
} from '../controllers/userController';
import { home, search } from '../controllers/videoController';
import routes from './routes';
import { onlyPublic } from '../middlewares';
import passport from "passport";

const globalRouter = express.Router();

globalRouter.get(routes.getJoin, onlyPublic, getJoin);
globalRouter.post(routes.postJoin, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, onlyPublic, logout);

// globalRouter.get(routes.gitHub, githubLogin);
// globalRouter.get(
//   routes.githubCallback,
//   passport.authenticate("github", { failureRedirect: "/login" }),
//   postGithubLogIn
// );
export default globalRouter;