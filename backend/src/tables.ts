import { PostManager } from "@/src/models/PostManager";

const managers = {
  posts: new PostManager(),
};

export const tables = new Proxy(managers, {
  get(target, prop: string) {
    if (prop in target) {
      return Reflect.get(target, prop);
    } else {
      throw new ReferenceError(
        `tables.${prop} is not defined. Did you register it in ${__filename}?`
      );
    }
  },
});

export type Tables = typeof managers;
