import express from "express";
import dotenv from "dotenv";

dotenv.config({
  path: "server/.env",
});

import "./core/db";
import { passport } from "./core/passport";

const app = express();

app.get("/auth/github", passport.authenticate("github"));

app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  (req, res) => {
    res.send();
  }
);

app.listen(3001, () => {
  console.log("Server Runned!");
});
