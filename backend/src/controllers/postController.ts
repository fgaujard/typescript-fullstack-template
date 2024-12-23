import { Request, Response, NextFunction } from "express";
import { tables } from "@/src/tables";

const browse = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const posts = await tables.posts.readAll();

    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};

const add = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const newPost = await tables.posts.create(req.body);

    res.status(201).json(newPost);
  } catch (err) {
    next(err);
  }
};

const destroy = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = req.params.id;

    const post = await tables.posts.delete(id);

    res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};

const postController = {
  browse,
  add,
  destroy,
};

export default postController;
