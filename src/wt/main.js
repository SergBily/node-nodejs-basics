import os from 'os';
import { createWorker } from './create-worker.js';

const startNumber = 10;

export const performCalculations = async () => {
    const numberCpuCores = os.cpus().length;
    const promiseWorkers = [];
    
    for (let i = 0; i < numberCpuCores; i++) {
        promiseWorkers.push(createWorker(startNumber + i));
    }

    const result = await Promise.all(promiseWorkers);
    console.log( result);
};

await performCalculations();