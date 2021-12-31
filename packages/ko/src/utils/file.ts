import { readFileSync, existsSync, writeFileSync } from 'fs';

export function readJsonFile(path: string) {
  if (existsSync(path)) {
    try {
      return require(path);
    } catch (ex) {
      throw ex;
    }
  } else {
    throw new Error(`${path} not exist`);
  }
}

export function writeJsonFile(object: any, path: string) {
  try {
    writeFileSync(path, JSON.stringify(object, null, 2));
  } catch (ex) {
    throw ex;
  }
}