import { mkdir, opendir, copyFile} from 'fs/promises';
import { existsSync } from 'fs';

export const copy = async () => {
  const dirPath = './files';
  const CopyDirPath = './files_copy';
  try {
    if (existsSync(CopyDirPath)) {
      throw new Error('FS operation failed');
    } else {
      await mkdir(CopyDirPath);
      const filesDir = await opendir(dirPath);

      for await (const dirent of filesDir) {
        await copyFile(`${dirPath}/${dirent.name}`, `${CopyDirPath}/${dirent.name}`);
     }
    }
   } catch (error) {
    console.error(error.message);
   }
};