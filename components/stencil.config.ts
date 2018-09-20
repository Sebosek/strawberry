import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'strawberry-components',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
