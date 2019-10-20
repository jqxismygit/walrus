import { IApi, IConfig } from '@walrus/types';
import * as stylelint from 'stylelint';
import defaultOptions from './defaultOptions';

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
      stylelint.lint(defaultOptions)
        .then(function(result) {
          console.log(result);
        });
    })
}
