import { IPluginPrettierOptions } from './plugin-prettier';
import { IPluginCommitLintOptions } from './plugin-commitlint';
import { IPluginStyleLintOptions } from './plugin-stylelint';

export type IPluginOptions = {
  [key: string]: any
}

export type IPlugin<T = IPluginOptions> = string | [string, T];

interface IConfig {
  /**
   * 当前项目使用的框架
   * @default react
   */
  frame?: 'react' | 'vue' | 'angular' | '';
  /**
   * 当前项目使用的样式
   * @default less
   */
  style?: 'scss' | 'less';
  /**
   * 是否使用typescript
   * @default true
   */
  useTypescript?: boolean;
  /**
   * 是否自动解析package.json中的插件
   * 默认: false
   */
  autoResolvePlugin?: boolean;
  /**
   * 插件集合 社区插件 或者 自定义插件
   * 默认: []
   */
  plugins?: IPlugin[];
  /**
   * prettier插件相关配置
   */
  pluginPrettier?: IPluginPrettierOptions;
  pluginCommitLint?: IPluginCommitLintOptions;
  pluginStyleLint?: IPluginStyleLintOptions;
}

export default IConfig;
