import { rm } from 'fs/promises';
import { FILES_PATH, ERROR_MESSAGE } from './constants.js';
import { getSourceUrl } from '../libs/getSourceUrl.js';

const nameFile = 'fileToRemove.txt';

export const remove = async () => {
  const pathToFile = getSourceUrl(FILES_PATH, nameFile);
    try {
        await rm(pathToFile);
    } catch (error) {
      throw new Error(ERROR_MESSAGE);
    }
};

await remove();