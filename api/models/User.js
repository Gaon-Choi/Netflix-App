const mongoose = require("mongoose");

// 테이블 스키마 만드는 과정

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: "" },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// 테이블명: User
// 스키마는 위에서 만든 userSchema를 참조하겠다.
module.exports = mongoose.model("User", UserSchema);
