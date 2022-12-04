import { writeFile } from 'fs/promises';
import { existsSync } from 'fs';

export const create = async () => {
  const createFilesPath = './files/fresh.txt'
  try {
    if (existsSync(createFilesPath)) {
      throw new Error('FS operation failed');
    } else {
      await writeFile(createFilesPath, 'I am fresh and young');
    }

  } catch (error) {
    console.error(error.message);
  }
};