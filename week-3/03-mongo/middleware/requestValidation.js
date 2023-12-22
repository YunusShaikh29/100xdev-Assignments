const requestValidation = async (req, res, param) => {
  //param will either be admin or user
  const username = req.headers.username;
  const password = req.headers.password;

  const existingUser = await param.findOne({
    username: username,
    password: password,
  });

  if (!existingUser) {
    res.status(404).json({
      message: "Wrong username or password",
    });
    return;
  }
};

module.exports = requestValidation;
