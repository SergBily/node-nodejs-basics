import { mkdir, copyFile, constants, readdir } from 'fs/promises';
import { FILES_PATH, ERROR_MESSAGE } from './constants.js';

const destinationSourceFolder = 'src/fs/files_copy';

export const copy = async () => {
  try {
      const [filesDir] = await Promise.all([readdir(FILES_PATH), mkdir(destinationSourceFolder)]);

      for (const file of filesDir) {
        await copyFile(
          `${FILES_PATH}/${file}`,
          `${destinationSourceFolder}/${file}`,
          constants.COPYFILE_EXCL
          );
     }
   } catch (_error) {
    throw new Error(ERROR_MESSAGE);
   }
};

await copy();