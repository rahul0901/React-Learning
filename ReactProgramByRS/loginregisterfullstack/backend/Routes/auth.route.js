import { Router } from "express";
import { Login, Register, getCurrentUser } from "../Controllers/Auth.Controller.js";

const authroute = Router();

authroute.post('/register', Register)
authroute.post('/login', Login)
authroute.post('/get-current-user', getCurrentUser)

export default authroute;