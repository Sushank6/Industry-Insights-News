const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();
const passport = require("passport");
console.log(process.env);
// const GOOGLE_CLIENT_ID =
//   "851449713614-8fs32jfqquttd7h3fs2obgm37sofj7fq.apps.googleusercontent.com";
// const GOOGLE_CLIENT_SECRET = "GOCSPX - yruzVeA - lCLuuMWD76ZpRm7mRkbh";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    function (accessToken, refreshToken, profile, callback) {
      callback(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
