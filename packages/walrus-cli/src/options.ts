import { IConfig } from '@walrus/types';

const defaultConfig: IConfig = {
  frame: 'react',
  autoResolvePlugin: false,
  useTypescript: true,
  plugins: []
};

// 默认配置
export const defaults = (): IConfig => defaultConfig;
