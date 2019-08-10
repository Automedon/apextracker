const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv").config({ path: "./config.env" });

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use("/api/v1/profile", require("./routes/profile"));

//Handle production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get(/.*/, (req, res) => res.sendFile("build/index.html"));
}

const serverPort = process.env.PORT || 8000;

app.listen(serverPort, () => {
  console.log(">Server on");
});
