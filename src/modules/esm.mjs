import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import url from 'url';
import './files/c.js';

const random = Math.random();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

let unknownObject; 

if (random > 0.5) {
  import('./files/a.json', { assert: { type: 'json' } })
    .then(obj => { unknownObject = obj.default });
} else {
  import('./files/b.json', { assert: { type: 'json' } })
    .then(obj => { unknownObject = obj.default });
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export {
    unknownObject,
    createMyServer,
};

