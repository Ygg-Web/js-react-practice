import express from "express";
import passport from "passport";

const app = express();

app.get("/auth/github", passport.authenticate("github"));

app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);
app.listen(3001, () => {
  console.log("Server Runned!");
});
