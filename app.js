import express from "express";
import session from "express-session";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import globalRouter from './routers/globalRouter';
import routes from "./routers/routes";
import dotenv from "dotenv";
dotenv.config
import { localsMiddleware } from "./middlewares";
import passport from "passport";
import "./passport";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";

const app = express();
const CookieStore = MongoStore(session)

app.set('view engine', "pug")

// middleware function: give file from directory "/uploads"
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet({contentSecurityPolicy: false,}));
app.use(morgan("dev"));
app.use(session({
  secret: process.env.COOKIE_SECRET,
  resave: true,
  saveUninitialized: false,
  store: new CookieStore({mongooseConnection: mongoose.connection})
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(localsMiddleware)
app.use(function(req, res, next) {
  res.setHeader("Content-Security-Policy", "script-src 'self' https://archive.org");
  return next();
  });

app.use(routes.home, globalRouter);
app.use(routes.user, userRouter);
app.use(routes.videos, videoRouter);

export default app;