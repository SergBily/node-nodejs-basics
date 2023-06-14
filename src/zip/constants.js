import { dirname, join } from 'path'
import { fileURLToPath } from 'url';

const fileName = 'fileToCompress.txt';
const archiveName = 'archive.gz';
const __dirname = dirname(import.meta.url);
const urlPathFile = join(__dirname, 'files', fileName);
const urlPathArchive = join(__dirname, 'files', archiveName);
export const pathToFile = fileURLToPath(urlPathFile);
export const pathToArchive = fileURLToPath(urlPathArchive);