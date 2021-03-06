'use strict';

const rel = require('../rel-to-skel')('lib');

module.exports = {
  description: 'Library',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Name (e.g. "my-library"):'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description:'
    }
  ],
  actions: [
    {
      type: 'add',
      path: 'lib/{{{name}}}/package.json',
      templateFile: rel('package.json.hbs')
    },
    {
      type: 'add',
      path: 'lib/{{{name}}}/README.md',
      templateFile: rel('README.md.hbs')
    },
    {
      type: 'symlink',
      path: 'lib/{{{name}}}/.gitignore',
      target: rel('gitignore')
    },
    {
      type: 'symlink',
      path: 'lib/{{{name}}}/tsconfig.json',
      target: rel('tsconfig.json')
    },
    {
      type: 'addMany',
      destination: 'lib/{{{name}}}/src/',
      base: rel('src/'),
      templateFiles: rel('src/**.hbs')
    }
  ]
};
