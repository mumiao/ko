import { join } from 'path';
import getCacheIdentifier from 'react-dev-utils/getCacheIdentifier';
import config from '../../utils/config';
import { MF_NAME } from '../../features/mfsu/constants';
import DepCollection from '../../features/mfsu/DepCollection';
const DepCollectionInstance = DepCollection.getInstance();

const THREAD_LOADER = require.resolve('thread-loader');
const BABEL_LOADER = require.resolve('babel-loader');

function getScriptLoaders(supportTypescript: boolean) {
  const testReg = supportTypescript ? /\.(t|j)sx?$/ : /\.jsx?$/;
  const scriptLoader: any = [
    {
      test: testReg,
      include: config.defaultPaths.src,
      use: [
        THREAD_LOADER,
        {
          loader: BABEL_LOADER,
          options: {
            presets: [
              [
                require.resolve('babel-preset-ko-app'),
                {
                  useAbsoluteRuntime: true,
                },
              ],
            ],
            plugins: [
              [
                join(
                  __dirname,
                  '../../features/mfsu/babel-plugin-mf-import/index.js'
                ),
                {
                  remoteName: MF_NAME,
                  webpackAlias: config.getWebpackAlias(supportTypescript),
                  webpackExternals: config.webpackExternals,
                  onMatch: (path: string, filepath: string) => {
                    DepCollectionInstance.setDeps({
                      path,
                      filepath,
                    });
                    console.log('=======matched=======');
                  },
                },
              ],
            ],
            babelrc: false,
            configFile: false,
            cacheIdentifier: getCacheIdentifier(
              config.isProductionEnv ? 'production' : '',
              ['babel-preset-ko-app', 'react-dev-utils', 'ko']
            ),
            cacheDirectory: true,
            cacheCompression: false,
            compact: config.isProductionEnv,
          },
        },
      ],
    },
  ];
  return scriptLoader;
}

export default getScriptLoaders;
