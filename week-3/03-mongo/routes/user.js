const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  user.save();
  res.json({
    message: "User created successfully.",
  });
});

router.get("/courses", (req, res) => {
  // Implement listing all courses logic
  try {
    Course.find().then((courses) =>
      res.json({
        courses: courses,
      })
    );
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic

  const course = await Course.findOne({ courseId: req.params.courseId });

  if (!course) {
    return res.status(404).json({ message: "Cannot find the course" });
  }

  const result = await User.findOneAndUpdate(
    { username: req.headers.username, password: req.headers.password },
    { $push: { purchasedCourses: course } }
  );
  if (!result) {
    return res.status(500).json({ message: "Internal server error!" });
  }
  res.status(200).json({
    message: "Course purchased successfully!",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.headers.username,
    password: req.headers.password,
  })

  if (!user) {
    return res.status(404).json({
      message: "Invalid username or password",
    });
  }

  res.json({ purchasedCourses:  user.purchasedCourses});
});

module.exports = router;
