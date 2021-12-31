import { container } from 'webpack';
import { MF_NAME } from '../constants';

export const mfHost = new container.ModuleFederationPlugin({
  name: MF_NAME, // TODO: rename this
  remotes: {

  }
})

export const mfRemote = new container.ModuleFederationPlugin({
  name: MF_NAME,
  library: {
    type: 'global',
    name: MF_NAME,
  },
  filename: 'remoteEntry.js',
  exposes: {

  }
})