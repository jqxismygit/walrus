import { IPluginStyleLintOptions } from '@walrus/types';
import styleLintConfig from './stylelint.config';

const defaultOptions: IPluginStyleLintOptions = {
  config: styleLintConfig,
  files: 'src/**/*.less',
  syntax: 'less'
};

export default defaultOptions;
