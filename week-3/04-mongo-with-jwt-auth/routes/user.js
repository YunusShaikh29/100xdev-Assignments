const { Router } = require("express");
const router = Router();
const { userLoginMiddleware, userMiddleware } = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const jwtPassword = process.env.JWT_PASSWORD;

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;
  const existingUser = await User.findOne({ username });

  if (existingUser) {
    return res.json({
      message: "User name already exists! Choose a different one",
    });
  }

  User.create({
    username,
    password,
  });
  res.status(200).json({
    message: "User created successfully!",
  });
});

router.post("/signin", userLoginMiddleware, (req, res) => {
  // Implement admin signup logic

  const { username, password } = req.body;
  const newToken = jwt.sign(
    {
      username,
      password,
    },
    jwtPassword
  );

//   res.setHeader("authorization", `Bearer ${newToken}`);

  res.json({
    token: newToken,
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

  const { authorization } = req.headers;

  const decode = jwt.decode(authorization);

  const result = await User.findOneAndUpdate(
    { username: decode.username, password: decode.password },
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

  const { authorization } = req.headers;

  const decode = jwt.decode(authorization);
  const user = await User.findOne({
    username: decode.username,
    password: decode.password,
  });

  if (!user) {
    return res.status(404).json({
      message: "Invalid username or password",
    });
  }

  res.json({ purchasedCourses: user.purchasedCourses });
});


module.exports = router;