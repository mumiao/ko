import { join, dirname, isAbsolute } from 'path';
import { readFileSync } from 'fs';
import { readJsonFile } from '../../utils/file';
import { MFSU_CACHE_FILE } from './constants';
import { MFSU, PlainObject } from '../../interfaces';

class DepInfo {
  static instance() {
    if (DepInfo.instance instanceof DepInfo) {
      return DepInfo.instance;
    } else {
      // DepInfo.instance = new DepInfo();
    }
  }

  private cwd: string;
  private opts: MFSU;
  private deps: PlainObject;
  private shouldUpdate: boolean;

  constructor(opts: MFSU) {
    this.cwd = process.cwd();
    this.opts = opts;
    this.deps = this.getDeps();
    this.shouldUpdate = this.check();
  }

  getDeps() {
    const deps = JSON.parse(
      readFileSync(join(this.cwd, 'package.json'), 'utf8')
    ).dependencies;
    return Object.keys(deps).reduce((exposes, key) => {
      // exposes[key] = this.getVersion(key);
      return exposes;
    }, {} as PlainObject);
  }

  

  isEqual(origin: PlainObject, target: PlainObject): boolean {
    const originKeys = Object.keys(origin);
    const targetKeys = Object.keys(target);
    if (originKeys.length !== targetKeys.length) {
      return false;
    }
    let bool = true;
    originKeys.forEach(key => {
      if (origin[key] !== target[key]) {
        bool = false;
      }
    });
    return bool;
  }

  check() {
    const cache = readJsonFile(join(this.cwd, MFSU_CACHE_FILE));
    if (this.isEqual(this.deps, cache)) {
      return true;
    }
    return false;
  }
}

export type IDepInfo = InstanceType<typeof DepInfo>;

export default DepInfo;
