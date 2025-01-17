export const parseEnv = () => {
  const prefix = 'RSS_';

  const results = Object.entries(process.env).reduce((acc, [key, value]) => {
    if (key.startsWith(prefix)) {
      acc.push(`${key}=${value}`);
    }
    return acc;
  }, [])
    .join('; ');
    console.log(results);
};

parseEnv();