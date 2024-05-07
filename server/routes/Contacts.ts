import { Router } from "express";

import { comment } from "../controllers/ContactsController";

const router: Router = Router();

router.post("/comment", comment);

export default router;
