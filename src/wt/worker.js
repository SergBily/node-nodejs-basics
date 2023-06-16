import { workerData, parentPort } from 'worker_threads';

export const nthFibonacci = (n) =>  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = (n) => {
    // Check for error
    
    // if (Math.random() > 0.5) {
    //   throw new Error('Error')  
    // };
    parentPort.postMessage(nthFibonacci(workerData));
};

sendResult();