import passport from "passport";
import User from "./models/User";
import GithubStrategy from "passport-github";
import dotenv from "dotenv";
dotenv.config;
import { githubLoginCallback } from "./controllers/userController";
import routes from "./routers/routes";

//strategy: way of authentication like facebook , github
passport.use(User.createStrategy()); 
passport.use(
  new GithubStrategy({
    clientID: "51704a91b44835aa1bf4",
    clientSecret:"fe2f4df8376760e4c9f5f279129f6857df40f30d",
    redirect_uri: `http://localhost:4000${routes.githubCallback}`
  },
    githubLoginCallback
  ),
);

//serialization: what information we are going to give cookie
passport.serializeUser(User.serializeUser());   
//deserialize: how do you find which one is which?
passport.deserializeUser(User.deserializeUser());