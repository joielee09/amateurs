import routes from "./routers/routes";
import multer from "multer";

const multerVideo = multer({ dest: 'uploads/videos/' });
export const uploadVideo = multerVideo.single("videoFile")

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1234
  }
  next();
};