import { env } from 'process';

export const parseEnv = () => {
  const prefix = 'RSS_';
  let res = '';
    for (const  [ key, value ] of Object.entries(env)) {
      if (key.match(prefix)) {
        res += `${key}=${value}; `;
      }
  }
  return res.trim().slice(0, -1);
};