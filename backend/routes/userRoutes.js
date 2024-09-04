const { getUser, updateUser, markCourseAsCompleted } = require("../controllers/users");

const router = require("express").Router();

router.route("/:username")
.get(getUser)
.patch(updateUser);

router.patch("/:username/:courseid", markCourseAsCompleted)


module.exports = router;