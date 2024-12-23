import express, { Router, Request, Response, NextFunction } from "express";
import postController from "./controllers/postController";

const router: Router = express.Router();

/* ************************************************************************* */
// Define API Routes Here
/* ************************************************************************* */

router.get("/posts", (req: Request, res: Response, next: NextFunction) =>
  postController.browse(req, res, next)
);

router.post("/posts", (req: Request, res: Response, next: NextFunction) =>
  postController.add(req, res, next)
);

router.delete("/posts/:id", (req: Request, res: Response, next: NextFunction) =>
  postController.destroy(req, res, next)
);

export default router;
