import routes from '../routers/routes'

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};
export const postJoin = (req, res) => {
  const {
    body: {name, email, password, password2}
  } = req;
  if(password!==password2){
    //status code
    res.status(400);
    // alert("비밀번호를 다시 확인하세요");
    //get error page
    console.log("mismatched");
    res.render("join", { pageTitle: "Join" });
  } else {
    // To Do: register user
    // To Do: Log user in
    console.log("successfully logined");
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) => res.render("login", { pageTitle: "Log In" });
export const postLogin = (req, res) => {
  res.redirect(routes.home)
}
export const logout = (req, res) =>{
  // ToDo: Process log out
  // res.redirect(routes.logout);
  res.render("logout",{pageTitle:"logout"});
}
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
  export const user = (req, res) => res.render("user");