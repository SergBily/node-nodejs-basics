import { pathToFile, pathToArchive } from "./constants.js";
import { createReadStream, createWriteStream} from 'fs'
import { createGzip } from "zlib";

export const compress = async () => {
  const readableStream = createReadStream(pathToFile);
  const writableStream = createWriteStream(pathToArchive);
  readableStream.pipe(createGzip()).pipe(writableStream);
};

await compress();