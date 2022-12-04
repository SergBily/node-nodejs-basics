import { argv } from 'process';

export const parseArgs = () => {
  const args = argv.slice(2);
  return args.reduce((prev, cur, index) => cur.includes('--')
    ? `${prev} ${cur.slice(2)} is`
    : index === args.length - 1
      ? `${prev} ${cur}`
      : `${prev} ${cur},`
    , '').trim();
};