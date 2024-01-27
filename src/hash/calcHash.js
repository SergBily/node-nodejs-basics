
import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import url from 'url';
import { getSourceUrl } from '../libs/getSourceUrl.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const filePath = 'files/fileToCalculateHashFor.txt';

export const calculateHash = async () => {
  const hash = createHash('sha256');
  const fileToReadPath = getSourceUrl(__dirname, filePath)
  const readable = createReadStream(fileToReadPath);

  readable.on('readable', () => {
    const data = readable.read();
    if (data) {
      hash.update(data);
    } else {
      console.log(hash.digest('hex'));
    }
  })
};

await calculateHash();