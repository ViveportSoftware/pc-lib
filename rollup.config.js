module.exports = {
  input: 'sdk/create-sdk-template/index.js',
  output: {
    file: 'sdk/create-sdk-template/output/bundle.js',
    format: 'esm',
  },
  // Need to disable treeshaking to ensure the entire file is output
  treeshake: false,
  plugins: [
    {
      name: 'create-sdk-template',
      writeBundle() {
        const fs = require('fs');
        fs.readFile(
          'sdk/create-sdk-template/output/bundle.js',
          'utf8',
          (err, data) => {
            if (err) {
              console.error('Error reading file:', err);
              return;
            }

            // Turn the js file content into a string template
            const content = `const content = \`${data}\`;\n\nexport { content };`;

            fs.writeFileSync('sdk/create-sdk/template.ts', content, 'utf8');
          }
        );
      },
    },
  ],
};
