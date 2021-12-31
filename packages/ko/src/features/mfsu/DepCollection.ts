import { join } from 'path';
import assert from 'assert';
import { sync } from 'pkg-up';
import { MFSU_ROOT, MFSU_INFO_FILE } from './constants';
import { writeJsonFile, readJsonFile } from '../../utils/file';
import { PlainObjectWithStringValue } from '../../interfaces';
// import { IDepInfo } from './DepInfo';

function debounce(fn: Function, delay: number) {
  let timer: any;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
}

class DepCollection {
  private static instance: DepCollection;
  private storage: string;
  private deps: PlainObjectWithStringValue;
  private cwd: string;
  private debounceWriteDeps: Function;

  public static getInstance(): DepCollection {
    if (!(DepCollection.instance instanceof DepCollection)) {
      DepCollection.instance = new DepCollection();
    }
    return DepCollection.instance;
  }

  constructor() {
    this.cwd = process.cwd();
    this.storage = join(this.cwd, MFSU_ROOT, MFSU_INFO_FILE);
    this.deps = {};
    this.debounceWriteDeps = debounce.call(this, this.writeDeps, 1000);
  }

  init() {
    //TODO: read deps from this.storage
  }

  getVersion(path: string, cwd: string) {
    const pkg = sync({
      cwd: join(cwd, 'node_modules', path),
    }) as string;
    return readJsonFile(pkg)['version'];
  }

  setDeps({ path, filepath }: { path: string; filepath: string }) {
    const version = this.getVersion(path, this.cwd);
    if (this.deps[path]) {
      assert(this.deps[path] !== version, 'version not the same');
    } else {
      this.deps[path] = version;
      this.debounceWriteDeps();
    }
  }

  writeDeps(path: string, version: string) {
    writeJsonFile(this.deps, this.storage);
  }
}

export default DepCollection;
