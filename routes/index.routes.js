const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here.");
});

// GET - /something/about
router.get("/about", (req, res, next) => {
  res.json("About us.");
});

// GET - /something/contact
router.get("/contact", (req, res, next) => {
  res.json("Contact info.");
});

module.exports = router;
