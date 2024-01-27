import { writeFile } from 'fs/promises';
import { getSourceUrl } from '../libs/getSourceUrl.js';
import { FILES_PATH, ERROR_MESSAGE } from './constants.js';

const FILE_NAME = 'fresh.txt';
const content = 'I am fresh and young';

export const create = async () => {
  const url = getSourceUrl(FILES_PATH, FILE_NAME);
  try {
    await writeFile(url, content, { flag: 'wx' });
  } catch (_error) {
    throw new Error(ERROR_MESSAGE);
  }
};

await create();