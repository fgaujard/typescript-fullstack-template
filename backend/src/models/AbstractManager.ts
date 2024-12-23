import fs from "fs/promises";

export abstract class AbstractManager<T> {
  public readonly filePath: string;

  constructor(filePath: string) {
    this.filePath = filePath;
  }

  async readAll(): Promise<T[]> {
    try {
      const data = await fs.readFile(this.filePath, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      throw new Error(`Error reading file: ${this.filePath}\n${error}`);
    }
  }

  async delete(id: string): Promise<T | Error> {
    try {
      const data = await this.readAll();
      const index = data.findIndex((item) => (item as any).id === id);

      if (index === -1) {
        throw new Error(`Item does not exist.`);
      }

      const [deletedItem] = data.splice(index, 1);

      await fs.writeFile(this.filePath, JSON.stringify(data, null, 2));

      return deletedItem;
    } catch (error) {
      throw new Error(`Error deleting item with ID: ${id}\n${error}`);
    }
  }
}
