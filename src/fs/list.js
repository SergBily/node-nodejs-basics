import { opendir } from 'fs/promises';
import { existsSync } from 'fs';

export const list = async () => {
  const dirPath = './files';
  try {
    if (existsSync(dirPath)) {
      const allFiles = await opendir(dirPath);
      for await (const dirent of allFiles) {
        console.log(dirent.name);
      }
    } else {
      throw new Error('FS operation failed');
    }
   } catch (error) {
    console.error(error.message);
   }
};