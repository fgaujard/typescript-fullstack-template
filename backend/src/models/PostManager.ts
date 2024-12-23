import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";
import { AbstractManager } from "./AbstractManager";

export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
}

export class PostManager extends AbstractManager<Post> {
  constructor() {
    super("src/database/database.json");
  }

  async create(post: Post): Promise<Post> {
    try {
      const data: Post[] = await this.readAll();

      const newPost: Post = { ...post, id: uuidv4() };

      data.push(newPost);

      await fs.writeFile(this.filePath, JSON.stringify(data, null, 2));

      return newPost;
    } catch (error) {
      throw new Error(
        `Error creating item : ${JSON.stringify(post)}\n${error}`
      );
    }
  }
}
