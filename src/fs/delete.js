import { rm } from 'fs/promises';
import { existsSync } from 'fs'

export const remove = async () => {
  const removeFilePath = './files/fileToRemove.txt';
    try {
      if (existsSync(removeFilePath)) {
        await rm(removeFilePath);
      } else {
        throw new Error('FS operation failed');
      }
    } catch (error) {
      console.error(error.message);
    }
};