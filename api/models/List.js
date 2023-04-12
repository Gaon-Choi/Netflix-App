const mongoose = require("mongoose");

// 테이블 스키마 만드는 과정

const ListSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    type: { type: String },
    genre: { type: String },
    content: { type:Array },
  },
  { timestamps: true }
);

// 테이블명: List
// 스키마는 위에서 만든 ListSchema를 참조하겠다.
module.exports = mongoose.model("List", ListSchema);
