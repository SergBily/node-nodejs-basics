import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import url from 'url';
import { getSourceUrl } from '../libs/libs-absolute-pass.js';

const nameFile = 'files/fileToWrite.txt';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const write = async () => {
  const pathToFile = getSourceUrl(__dirname, nameFile);
  const writableStream = createWriteStream(pathToFile, { flags: 'a' });
  await pipeline(process.stdin, writableStream);
};

await write();