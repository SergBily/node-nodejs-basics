
import { createHash } from 'crypto';
import { createReadStream } from "fs";


export const calculateHash = async () => {
  const hash = createHash('sha256');
  const input = createReadStream('./files/fileToCalculateHashFor.txt');
  // hash.setEncoding('hex');

  // const data = input.read();
  // if (data) hash.update(data);
  input.on('readable', () => {
    const data = input.read();
    hash.update(data);

  })
  return hash.digest('hex')
};

console.log(calculateHash());