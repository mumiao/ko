import { resolve, isAbsolute } from 'path';
import { existsSync } from 'fs';
import { readJsonFile } from '../utils/file';
// import MFCache from '../features/mfsu/DepInfo';
import { MFSU, PlainObject } from '../interfaces';

class Config {
  cwd: string;
  mfsu: MFSU;
  private webpackAlias: PlainObject | null;

  private static instance: Config;

  private constructor() {
    this.cwd = process.cwd();
    this.webpackAlias = null;
    this.mfsu = {
      name: 'ko-mf',
      lib: '.mfsu',
    };
  }

  public static getInstance(): Config {
    if (!Config.instance) {
      Config.instance = new Config();
    }
    return Config.instance;
  }

  public getFileRealPath(path: string): string {
    return isAbsolute(path) ? path : resolve(this.cwd, path);
  }

  public get userConf() {
    const userConfPath = this.getFileRealPath('ko.config.js');
    if (existsSync(userConfPath)) {
      const config = userConfPath ? require(userConfPath as string) : {};
      if (config.mfsu) {
        if (typeof config.mfsu !== 'object') {
          throw new SyntaxError(`ko.config.js: mfsu must be an object`);
        }
        this.mfsu = config.mfsu;
        delete config.mfsu;
      }
      return config;
    } else {
      throw new Error('user config file not exist, please check it!');
    }
  }

  public get defaultPaths() {
    return {
      src: this.getFileRealPath('src'),
      dist: this.getFileRealPath('dist'),
      public: this.getFileRealPath('public'),
      html: this.getFileRealPath('public/index.html'),
      tsconfig: this.getFileRealPath('tsconfig.json'),
    };
  }

  public getWebpackAlias(supportTypescript: boolean) {
    if (this.webpackAlias) {
      return this.webpackAlias;
    }
    if (supportTypescript) {
      try {
        const { compilerOptions = {} } = readJsonFile(
          this.getFileRealPath('tsconfig.json')
        );
        const { paths, baseUrl } = compilerOptions;
        if (paths) {
          const transferGlob = (glob: string) => {
            return glob.replace(/\/\*/g, '');
          };
          this.webpackAlias = Object.keys(paths).reduce((acc, key) => {
            const value = paths[key];
            if (value.length === 1) {
              acc[transferGlob(key)] = resolve(
                this.cwd,
                baseUrl,
                transferGlob(value[0])
              );
            } else {
              acc[transferGlob(key)] = value.map((path: string) =>
                resolve(this.cwd, baseUrl, transferGlob(path))
              );
            }
            return acc;
          }, {} as PlainObject);
        }
      } catch (ex) {
        console.warn(
          'transfer tsconfig.json paths to webpack alias failed\n,' +
            'did you remove all comments in tsconfig.json?\n',
          ex
        );
      }
    } else {
      this.webpackAlias = this.userConf?.resolve?.alias || {};
    }
    return this.webpackAlias;
  }

  public get webpackExternals() {
    return this.userConf.externals;
  }

  public get isProductionEnv(): boolean {
    const PROD = 'production';
    return process.env.NODE_ENV === PROD;
  }
}

export default Config.getInstance();
