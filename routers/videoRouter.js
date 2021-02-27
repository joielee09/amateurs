import express from "express";
import { deleteVideo, getEditVideo, postEditVideo, getUpload, postUpload, videoDetail, videos } from "../controllers/videoController";
import { uploadVideo, onlyPrivate } from "../middlewares";
import routes from "../routers/routes";

const videoRouter = express.Router();

// upload
videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

// detail
videoRouter.get(routes.videoDetail(), videoDetail);

// edit
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo)

export default videoRouter;