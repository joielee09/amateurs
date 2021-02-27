import passport from "passport";
import User from "./models/User";
import GithubStrategy from "passport-github";
import dotenv from "dotenv";
dotenv.config;
import { githubLoginCallback } from "./controllers/userController";
import routes from "./routers/routes";

//strategy: way of authentication like facebook , github
// passport.use(User.createStrategy()); 
// passport.use(
//   new GithubStrategy({
//     clientID:"d036a452d79456589250",
//     clientSecret:"bd461d8759ae55638c181c2128a8ba09a94a2e5d",
//     redirect_uri: "http://localhost:4000/auth/github/callback"
//   },
//     githubLoginCallback
//   ),
// );

//serialization: what information we are going to give cookie
passport.serializeUser(User.serializeUser());   
//deserialize: how do you find which one is which?
passport.deserializeUser(User.deserializeUser());