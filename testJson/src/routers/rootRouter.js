import express from "express";
import { home } from "../controllers/controller";

const rootRouter = express.Router();

rootRouter.get("/", home);

export default rootRouter;
