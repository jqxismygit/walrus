import { Configuration, SyntaxType } from 'stylelint';

export interface IPluginStyleLintOptions {
  // lint 配置
  config?: Partial<Configuration>;
  configBasedir?: string;
  configFile?: string;
  code?: string;
  files?: string | string[];
  syntax?: SyntaxType;
}
