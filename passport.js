import passport from "passport";
import User from "./models/User";
import GithubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";
import kakaoStrategy from "passport-kakao";

import dotenv from "dotenv";
dotenv.config;
import {
  facebookLoginCallback,
  githubLoginCallback,
  kakaoLoginCallback
} from "./controllers/userController";
import routes from "./routers/routes";

//strategy: way of authentication like facebook , github
passport.use(User.createStrategy());
passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      redirect_uri: `http://localhost:4000${routes.githubCallback}`
    },
    githubLoginCallback
  )
);
// passport.use(
//   new kakaoStrategy(
//     {
//       clientID: "76bde2bd2fb89d695b835e0ed6593371",
//       clientSecret: "PVFaoXg2aVC1XJIZtyqrcK57y5s8Ew0p",
//       callbackURL: `http://localhost:4000/auth/kakao/callback`
//     },
//     kakaoLoginCallback
//   )
// );

//serialization: what information we are going to give cookie
passport.serializeUser(User.serializeUser());
//deserialize: how do you find which one is which?
passport.deserializeUser(User.deserializeUser());
