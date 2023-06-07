import { readdir } from 'fs/promises';
import { FILES_PATH } from './constants.js';

export const list = async () => {
  try {
      const allFiles = await readdir(FILES_PATH);
      for await (const file of allFiles) {
        console.log(file);
      }
   } catch {
    throw new Error('FS operation failed');
   }
};

await list();