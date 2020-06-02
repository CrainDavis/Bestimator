// Requiring path to so we can use relative routes to our HTML files
const router = require("express").Router();
const db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

/**
 * Home Page
 */
router.get("/", function (req, res) {
  res.render("index", { user: req.user });
});

/**
 * Home Page, again
 */
router.get("/home", function (req, res) {
  res.render("index", { user: req.user });
});

/**
 * Signup page
 */
router.get("/signup", function (req, res) {
  if (req.user) {
    res.redirect("/");
  } else {
    res.render("signup", { user: req.user });
  }
});

/**
 * Login page
 */
router.get("/login", function (req, res) {
  if (req.user) {
    res.redirect("/");
  } else {
    res.render("login", { user: req.user });
  }
});

/**
 * Game page
 */
router.get("/game", isAuthenticated, function (req, res) {
  res.render("game", { user: req.user });
});

/**
 * Player page
 */
router.get("/player", isAuthenticated, function (req, res) {
  res.render("player", { user: req.user });
});

/**
 * Leaderboard page
 */
router.get("/leaderboard", isAuthenticated, function (req, res) {
  res.render("leaderboard", { user: req.user });
});

/**
 * Generic Error Page
 */
router.get("*", function (req, res) {
  res.render("errors/404", { user: req.user });
});

module.exports = router;
