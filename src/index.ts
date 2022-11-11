import { Plugin } from 'rollup'

const name = 'rollup-plugin-external-node-modules'
const EXTERNAL_REG = /^.*\/node_modules\//

function external (): Plugin {
  return {
    name,
    resolveId (source) {
      if (source.includes('/node_modules/')) {
        return { id: source.replace(EXTERNAL_REG, ''), external: true }
      }
    },
  }
}

export default external
