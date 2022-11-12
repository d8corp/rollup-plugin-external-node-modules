[![NPM](https://img.shields.io/npm/v/rollup-plugin-external-node-modules.svg)](https://www.npmjs.com/package/rollup-plugin-external-node-modules)
[![downloads](https://img.shields.io/npm/dm/rollup-plugin-external-node-modules.svg)](https://www.npmtrends.com/rollup-plugin-external-node-modules)
[![changelog](https://img.shields.io/badge/Changelog-⋮-brightgreen)](https://changelogs.xyz/rollup-plugin-external-node-modules)
[![license](https://img.shields.io/npm/l/rollup-plugin-external-node-modules)](https://github.com/d8corp/rollup-plugin-external-node-modules/blob/main/LICENSE)

# rollup-plugin-external-node-modules

🍣 A Rollup plugin to fix `node_modules` folder creation.

[![stars](https://img.shields.io/github/stars/d8corp/rollup-plugin-external-node-modules?style=social)](https://github.com/d8corp/rollup-plugin-external-node-modules/stargazers)
[![watchers](https://img.shields.io/github/watchers/d8corp/rollup-plugin-external-node-modules?style=social)](https://github.com/d8corp/rollup-plugin-external-node-modules/watchers)

## Install

```shell
npm i rollup-plugin-external-node-modules
```

## Usage

Just use without options

```typescript
import external from 'rollup-plugin-external-node-modules'

export default {
  plugins: [
    external(),
  ],
}
```

## Issues
If you find a bug or have a suggestion, please file an issue on [GitHub](https://github.com/d8corp/rollup-plugin-external-node-modules/issues).

[![issues](https://img.shields.io/github/issues-raw/d8corp/rollup-plugin-external-node-modules)](https://github.com/d8corp/rollup-plugin-external-node-modules/issues)
