import fs from "fs";

const create = async () => {
  const errorMsg = "FS operation failed";
  const fileText = "I am fresh and young";
  const filePath = "src/fs/files/fresh.txt";
  await fs.access(filePath, async (err) => {
    if (err) {
      await fs.writeFile(filePath, fileText, (err) => {
        if (err) throw new Error(errorMsg);
      });
    } else {
      throw new Error(errorMsg);
    }
  });
};

await create();
