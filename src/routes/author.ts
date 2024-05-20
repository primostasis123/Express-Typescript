import { Router } from "express";
import { getAllAuthors, getAuthor } from "../handlers/author.handlers";

const router = Router();

router.get("/", getAllAuthors);
router.get("/:id", getAuthor);

export default router;