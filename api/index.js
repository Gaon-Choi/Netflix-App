const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // The useCreateIndex option has been deprecated for a while and removed as of the Mongoose 6 release
    // useCreateIndex: true,
  })
  .then(() => console.log("DB Connection Success!"))
  .catch((err) => {
    console.log(err);
  });

/**
 * 기본적으로 express 서버에서는 JSON을 받는다.
 */
app.use(express.json());

// /routes에 만든 route js를 하나씩 임포트 후 연결
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
