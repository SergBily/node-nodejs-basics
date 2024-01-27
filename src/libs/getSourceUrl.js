import { join } from 'path'

export const getSourceUrl = (urlFile, fileName) => join(urlFile, fileName);
