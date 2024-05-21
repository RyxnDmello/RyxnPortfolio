import { Router } from "express";

import { comment, service } from "../controllers/ContactsController";

const router: Router = Router();

router.post("/comment", comment);
router.post("/service", service);

export default router;
