import { pathToFile, pathToArchive } from "./constants.js";
import { createReadStream, createWriteStream} from 'fs'
import { createGunzip } from "zlib";

export const decompress = async () => {
  const readableStream = createReadStream(pathToArchive);
  const writableStream = createWriteStream(pathToFile);
  readableStream.pipe(createGunzip()).pipe(writableStream);
};


await decompress();