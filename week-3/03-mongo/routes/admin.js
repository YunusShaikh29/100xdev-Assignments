const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const admin = new Admin({
    username: username,
    password: password,
  });
  admin.save();
  res.json({
    message: "Admin created successfully!",
  });
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  try {
    const id = Math.floor(Math.random() * 100000);
    const course = new Course({
      courseId: id,
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      imageLink: req.body.imageLink,
      published: req.body.published,
    });
    course.save();
    res.json({
      message: "Course created successfully!",
      id: id,
    });
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  try {
    Course.find().then((courses) => res.json({ courses: courses }));
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
