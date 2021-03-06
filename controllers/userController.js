import passport from "passport";
import routes from "../routers/routes";
import User from "../models/User";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};
export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  console.log(name, email, password, password2);
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User({
        name,
        email
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Log In" });
export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home
});

export const githubLogin = passport.authenticate("github");
export const githubLoginCallback = async (_, __, profile, cb) => {
  const {
    _json: { id, avatar_url, name, email }
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.githubId = id;
      user.avatarUrl = avatar_url;
      user.name = name;
      user.save();
      return cb(null, user);
    } else {
      const newUser = await User.create({
        email,
        name: name,
        avatarUrl: avatar_url,
        githubId: id
      });
      return cb(null, newUser);
    }
    console.log(user);
  } catch (error) {
    console.log("github login callback error");
    return cb(error);
  }
};
export const postGithubLogIn = (req, res) => {
  res.redirect(routes.home);
};

// export const kakaoLogin = passport.authenticate("kakao");
// export const kakaoLoginCallback = (req, res) => {
//   res.redirect(routes.home);
// };
// export const postKakaoLogin = (req, res) => {
//   res.redirect(routes.home);
// };

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

export const userDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const user = await User.findById(id);
    res.render("userDetail", { pageTitle: "User Detail", user });
  } catch (error) {
    res.redirect(routes.home);
    console.log(error);
  }
};
export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("videos");
    res.render("userDetail", { pageTitle: "User Detail", user });
  } catch (error) {
    res.redirect(routes.home);
  }
};
export const getEditProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const postEditProfile = async (req, res) => {
  const {
    body: { name, email },
    file: { path }
  } = req;
  try {
    await User.findByIdAndUpdate(req.user.id, {
      name,
      email,
      avatarUrl: file ? file.path : req.user.avatarUrl
    });
    res.redirect(routes.me);
  } catch (error) {
    res.render("editProfile", { pageTitle: "Edit Profile" });
    console.log(errpr);
  }
};

export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
export const user = (req, res) => res.render("user");
