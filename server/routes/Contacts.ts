import { Router } from "express";

import { contacts } from "../controllers/ContactsController";

const router: Router = Router();

router.post("/", contacts);

export default router;
