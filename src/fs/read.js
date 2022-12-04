import { readFile} from 'fs/promises';
import { existsSync } from 'fs';

export const read = async () => {
  const readableFilePath = './files/fileToRead.txt';
  try {
    if (existsSync(readableFilePath)) {
      const contentReadableFile = await readFile(readableFilePath, { encoding: 'utf8' });
      console.log(contentReadableFile);
    } else {
      throw new Error('FS operation failed');
    }
   } catch (error) {
    console.error(error.message);
   }
};