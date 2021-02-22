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
export const postUpload = async(req, res) => {
  const { 
    body:{ title, description }, 
    file: { path }
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title: title,
    description: description
  })
  console.log("newVideo: ", newVideo);
  //todo: upload and save video

  res.redirect(routes.videoDetail(newVideo.id))
};
export const videoDetail = async(req, res) => {
  const {
    params: {id}
  }=req;
  try{
    const video = await Video.findById(id);
    console.log(video);
    res.render( "videoDetail", { pageTitle: "Video Detail", video });
  } catch(error){
    console.log(error);
    res.redirect(routes.home);
  }
  
}
  export const editVideo = (req, res) => res.render("editVideo", {pageTitle: "Edit Video"});
export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle: "Delete Video"});