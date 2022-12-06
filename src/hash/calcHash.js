
import { createHash } from 'crypto';
import { createReadStream } from "fs";


export const calculateHash = async () => {
  const hash = createHash('sha256');
  const readable = createReadStream('./files/fileToCalculateHashFor.txt');

  readable.on('readable', () => {
    const data = readable.read();
    if (data) {
      hash.update(data);
    } else {
      console.log(hash.digest('hex'));
    }
  })
};