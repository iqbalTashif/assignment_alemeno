const express = require("express");
const {getCourses, getOne} = require("../controllers/Courses");

const router = express.Router();

router.get("/", getCourses);
router.get("/:courseId", getOne);



module.exports = router;