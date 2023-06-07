import fs from 'fs/promises';
import { existsSync } from 'fs';
import { FILES_PATH, ERROR_MESSAGE } from './constants.js';
import { getSourceUrl } from '../libs/libs-absolute-pass.js';

const previosNameFile = 'wrongFilename.txt';
const nextNameFile = 'properFilename.md';

export const rename = async () => {
  const oldPath = getSourceUrl(FILES_PATH, previosNameFile);
  const newPath  = getSourceUrl(FILES_PATH, nextNameFile);
  try {
    if (existsSync(oldPath)) {
     await rename(oldPath, newPath);
    } else {
      throw new Error(ERROR_MESSAGE);
    }
   } catch (error) {
    console.error(error.message);
   } 
};

await rename();