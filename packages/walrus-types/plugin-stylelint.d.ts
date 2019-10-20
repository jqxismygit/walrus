import { Configuration } from 'stylelint';

export interface IPluginStyleLintOptions {
  // lint 配置
  config?: Partial<Configuration>;
  configBasedir?: string;
  configFile?: string;
}
