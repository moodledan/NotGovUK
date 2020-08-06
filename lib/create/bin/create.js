'use strict';

const { execFileSync } = require('child_process');
const { resolve } = require('path');

const plop = resolve(__dirname, '..', 'node_modules', '.bin', 'plop');
const file = resolve(__dirname, '..', 'plopfile.js');
const args = process.argv.slice(2);

// Simply run PlopJS with our config
try {
  execFileSync(plop, [ '--plopfile', `${file}`, ...args ], { stdio: 'inherit' });
} catch (err) {
  process.exit(err.status || 1);
}