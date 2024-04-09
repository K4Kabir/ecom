import express from "express";
import cors from "cors";
import { connect } from "./libs/connection.js";
import User from "./routes/User.routes.js";

connect();
const app = express();
app.use(cors());

app.use("/User", User);

app.listen(8000, () => {
  console.log("Server running at port 8000");
});
