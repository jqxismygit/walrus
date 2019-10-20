import { IApi, IConfig } from '@walrus/types';

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
      console.log('*****');
      console.log(args);
    })
}
