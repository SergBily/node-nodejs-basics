import { readFile} from 'fs/promises';
import { existsSync } from 'fs';
import { FILES_PATH, ERROR_MESSAGE } from './constants.js';
import { getSourceUrl } from '../libs/getSourceUrl.js';

const nameFile = 'fileToRead.txt';

export const read = async () => {
  const pathToFile = getSourceUrl(FILES_PATH, nameFile)
  try {
      const contentReadableFile = await readFile(pathToFile, { encoding: 'utf8' });
      console.log(contentReadableFile);
   } catch {
    throw new Error(ERROR_MESSAGE);
   }
};

await read();