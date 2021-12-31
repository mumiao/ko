import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { Compiler } from 'webpack';
import config from '../../../utils/config';
import { MFSU_ROOT } from '../constants';
import DepCollection from '../DepCollection';

class MFSUBootStrapPlugin {
  apply(compiler: Compiler) {
    compiler.hooks.beforeRun.tap('MFSUBootStrapPlugin', compiler => {
      if (config.mfsu) {
        const root = join(process.cwd(), MFSU_ROOT);
        if (!existsSync(root)) {
          mkdirSync(root);
        }
        const depCollection = new DepCollection();
        depCollection.init();
      }
    });
  }
}

export default MFSUBootStrapPlugin;
