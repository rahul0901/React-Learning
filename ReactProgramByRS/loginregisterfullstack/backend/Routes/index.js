import { Router } from "express";
import authroute from "./auth.route.js";

const router = Router()

router.use('/auth', authroute)

export default router;