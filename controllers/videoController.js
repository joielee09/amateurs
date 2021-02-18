import routes from "../routers/routes";
import Video from '../models/Video';
import Comment from "../models/Comment";

export const home = async(req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", {pageTitle: "Home", videos });
  }
  catch(error) {
    console.log(error);
    res.render("home", {pageTitle: "Home", videos: [] });
  }
};
export const search = async(req, res) => {
  try {
    const {query:{term: searchingBy}} = req;
    res.render("search", {pageTitle: "Search", searchingBy, videos :mock_videos });
  }
  catch(error) {
    console.log(error)
  }
};
export const getUpload = (req, res) => res.render("upload", {pageTitle: "Upload"});
export const postUpload = (req, res) => {
  const {
    body:{ file, title, description } 
  }= req;
  //todo: upload and save video
  console.log("this is routed to detailed video page")
  res.redirect(routes.videoDetail(324393))
};
export const videos = (req, res) => res.render("videos", {pageTitle: "Videos"});
export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle: "Video Detail"});
export const editVideo = (req, res) => res.render("editVideo", {pageTitle: "Edit Video"});
export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle: "Delete Video"});