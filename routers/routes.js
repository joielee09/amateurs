const HOME = "/";
const GET_JOIN = "/get-join";
const POST_JOIN = "/post-join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// User

const USER = "/user";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Video

const VIDEOS = "/videos";
const UPLOAD = "/videos/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
  home: HOME,
  getJoin: GET_JOIN,
  postJoin: POST_JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  user: USER,
  userDetail:(id)=>{
    if(id){
      return `user/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail:(id)=>{
    if(id) {
      return `videos/${id}`;
    } else {
      return VIDEO_DETAIL;
    }
  },
  editVideo: EDIT_VIDEO,
  deleteVideo: DELETE_VIDEO
}

export default routes;