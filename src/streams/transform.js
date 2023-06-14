import { Transform } from "stream";

const reverseString = (str) => str.split('').reverse().join('');

class MyTransformStream extends Transform {

  _transform(chunk, _encoding, done) {
    done(null, reverseString(chunk.toString()));
  }
}

export const transform = async () => {
  process.stdin.pipe(new MyTransformStream()).pipe(process.stdout);
};

await transform();