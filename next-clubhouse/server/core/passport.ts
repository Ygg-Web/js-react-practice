import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github";

passport.use(
  new GitHubStrategy(
    {
      consumerKey: process.env.GITHUB_CLIENT_ID,
      consumerSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:3001/auth/github/callback",
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(accessToken, refreshToken, profile, cb);
    }
  )
);
