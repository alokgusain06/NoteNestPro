const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.homepage);
router.get("/faqs", mainController.faqs);
router.get("/feature", mainController.feature);
router.get("/about", mainController.about);
module.exports = router;
