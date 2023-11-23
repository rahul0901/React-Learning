import { Router } from "express";
import { Test } from "../Controllers/test.controllers.js";
import authroutes from './auth.routes.js'

const router = Router();

router.use('/test', Test)
router.use('/auth', authroutes)

export default router;