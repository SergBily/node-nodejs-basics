import { createReadStream } from "fs";
import url from 'url';
import { getSourceUrl } from '../libs/getSourceUrl.js';

const nameFile = 'files/fileToRead.txt';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const read = async () => {
  const pathToFile = getSourceUrl(__dirname, nameFile)
  const readableStream = createReadStream(pathToFile);
  readableStream.pipe(process.stdout);
};

await read();