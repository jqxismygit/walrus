import { readFileSync, writeFileSync } from 'fs';
import * as prettier from 'prettier';
import { IProcessFilesOptions } from '@walrus/types';
import { join } from 'path';

const processFiles = (
  directory: string,
  files: string[],
  opts: IProcessFilesOptions = {}
) => {
  const { check, config, onExamineFile, onCheckFile, onWriteFile } = opts;
  for (const relative of files) {
    onExamineFile && onExamineFile(relative);
    const file = join(directory, relative);
    const options = Object.assign(
      {},
      prettier.resolveConfig.sync(file, {
        config,
        editorconfig: true
      }),
      { filepath: file }
    );

    const input = readFileSync(file, 'utf8');

    if (check) {
      const isFormatted = prettier.check(input, options);
      onCheckFile && onCheckFile(relative, isFormatted);
      continue;
    }

    const output = prettier.format(input, options);

    if (output !== input) {
      writeFileSync(file, output);
      onWriteFile && onWriteFile(relative);
    }
  }
};

export default processFiles;
