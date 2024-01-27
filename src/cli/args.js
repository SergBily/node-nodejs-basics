const prefix = '--';

export const parseArgs = () => {
  const argsWithoutDir = process.argv.slice(2);
  const stringArgs = argsWithoutDir.reduce((prev, cur, index) => cur.startsWith(prefix)
    ? `${prev} ${cur.slice(2)} is`
    : index === argsWithoutDir.length - 1
      ? `${prev} ${cur}`
      : `${prev} ${cur},`
    , '').trim();
  console.log(stringArgs);
};

parseArgs();