import { Router } from "express";

import { create } from "../controllers/ServiceController";

const router: Router = Router();

router.post("/", create);

export default router;
