import url from 'url';
import { Worker } from 'worker_threads';
import { getSourceUrl } from '../libs/libs-absolute-pass.js';

const __filename = 'worker.js';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const statusResolved = 'resolved';
const statusError = 'error';

export const createWorker = (workerData) => {
    const pathToFile = getSourceUrl(__dirname, __filename);

    return new Promise((resolve, _reject) => {
        const worker = new Worker(pathToFile, { workerData });

        worker.on('message', (data)=> {
            resolve({status: statusResolved, data});
        });

        worker.on("error", ()=> {
            resolve({status: statusError, data: null});
        })
    })
};