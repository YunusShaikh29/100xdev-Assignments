const { Router } = require("express");
const {
  adminLoginMiddleWare,
  adminMiddleware,
} = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const jwtPassword = process.env.JWT_PASSWORD;

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const existingAdmin = await Admin.findOne({ username: req.body.username });

  if (existingAdmin) {
    return res.json({
      mesage: "Username already exisits! Choose a different one.",
    });
  }
  Admin.create({
    username: req.body.username,
    password: req.body.password,
  });
  res.status(200).json({
    msg: "Admin created successfully!",
  });
});

router.post("/signin", adminLoginMiddleWare, (req, res) => {
  // Implement admin signup logic

  const newToken = jwt.sign(
    { username: req.body.username, password: req.body.password },
    jwtPassword
  );

  // res.setHeader("authorization", `Bearer ${newToken}`);

  res.json({
    token: newToken,
  });
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic

  const { title, description, price, imageLink, published } = req.body;

  try {
    const id = Math.floor(Math.random() * 100000);
    Course.create({
      courseId: id,
      title,
      description,
      price,
      imageLink,
      published,
    });
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
