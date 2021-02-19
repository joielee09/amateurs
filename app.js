import express from  "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import globalRouter from './routers/globalRouter';
import routes from "./routers/routes";
import { localsMiddleware } from "./middlewares";

const app = express();

app.set('view engine', "pug")
// middleware function: give file from directory "/uploads"
app.use("/uploads", express.static("uploads"))
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet({ contentSecurityPolicy: false}));
app.use(morgan("dev"));
app.use(localsMiddleware)
app.use(function(req, res, next) {
  res.setHeader("Content-Security-Policy", "script-src 'self' https://archive.org");
  return next();
  });

app.use(routes.home, globalRouter);
app.use(routes.user, userRouter);
app.use(routes.videos, videoRouter);

export default app;