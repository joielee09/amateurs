import express from "express";
import { deleteVideo, getEditVideo, postEditVideo, getUpload, postUpload, videoDetail, videos } from "../controllers/videoController";
import { uploadVideo } from "../middlewares";
import routes from "../routers/routes";

const videoRouter = express.Router();

// upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// detail
videoRouter.get(routes.videoDetail(), videoDetail);

// edit
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.deleteVideo(), deleteVideo)

export default videoRouter;