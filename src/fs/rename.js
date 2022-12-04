import fs from 'fs/promises';
import { existsSync } from 'fs';

export const rename = async () => {
  const renameFilePath = './files/wrongFilename.txt';
  const toRenameFilePath = './files/properFilename.md';
  try {
    if (existsSync(renameFilePath)) {
      fs.rename(renameFilePath, toRenameFilePath);
    } else {
      throw new Error('FS operation failed');
    }
   } catch (error) {
    console.error(error.message);
   } 
};