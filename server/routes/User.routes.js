import express from "express";
import { Login } from "../controllers/UserController.js";
import bodyParser from "body-parser";

const User = express.Router();
User.use(bodyParser.json());

User.post("/login", Login);

export default User;
