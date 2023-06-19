import { fork } from 'child_process';
import url  from 'url';
import { getSourceUrl } from '../libs/libs-absolute-pass.js';

const __filename = 'script.js';
const folderName = 'files';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const spawnChildProcess = async (args) => {
    const pathToFile = getSourceUrl(__dirname, `${folderName}/${__filename}`);
    const childProcess = fork(pathToFile, args, { silent: true });

   process.stdin.pipe(childProcess.stdin);
   childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess(['1', '2']);