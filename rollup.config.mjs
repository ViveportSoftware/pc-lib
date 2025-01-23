import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

import fs from 'fs';

export default {
  input: 'sdk/create-sdk-ts/export-sdk.ts',
  output: {
    file: 'sdk/create-sdk-ts/dist/bundle.js',
    format: 'esm',
    banner: `/******************************************************************************
Copyright (c) 2025 HTC CORPORATION.
***************************************************************************** */
`,
    footer: '',
  },
  // Need to disable treeshaking to ensure the entire file is output
  treeshake: false,
  plugins: [
    resolve(),
    typescript({
      tsconfig: './tsconfig.rollup.json', // 指定自定義的 tsconfig.json
    }),
    {
      name: 'create-sdk-template',
      writeBundle() {
        fs.readFile('sdk/create-sdk-ts/dist/bundle.js', 'utf8', (err, data) => {
          if (err) {
            console.error('Error reading file:', err);
            return;
          }

          // Turn the js file content into a string template
          const content = `const content = \`${data}\`;\n\nexport { content };`;

          fs.writeFileSync('sdk/create-sdk-ts/template.ts', content, 'utf8');
        });
      },
    },
  ],
};
