import { IApi, IConfig } from '@walrus/types';
import * as stylelint from 'stylelint';

export default function(api: IApi, config: IConfig) {
  api.registerCommand(
    'stylelint',
    {
      description: 'Lint your style code',
      usage: 'walrus stylelint [opts] [filename ...]',
      options: {

      }
    },
    (args) => {
      // stylelint.lint()
    })
}
