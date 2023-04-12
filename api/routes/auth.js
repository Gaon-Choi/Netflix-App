const router = require("express").Router();
const User = require("../models/User");

// REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  console.log(newUser);

  try {
    const user = await newUser.save();
    /**
     * async await을 붙이지 않는 경우
     * res.json(user)를 통해 user 객체를 쓰려고 하나, 윗줄이 실행되지 않은 상황. 이를 async await로 맞춰줌(비동기적 실행)
     */
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// export
module.exports = router;
