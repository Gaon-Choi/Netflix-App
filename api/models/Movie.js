const mongoose = require("mongoose");

// 테이블 스키마 만드는 과정

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgSm: { type: String },
    trailer: { type: String },
    video: { type: String },
    year: { type: String },
    limit: { type: Number },
    genre: { type: String },
    isSeries: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// 테이블명: Movie
// 스키마는 위에서 만든 MovieSchema를 참조하겠다.
module.export = mongoose.model("Movie", MovieSchema);
