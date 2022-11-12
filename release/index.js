'use strict';

const name = 'rollup-plugin-external-node-modules';
const EXTERNAL_REG = /^.*\/node_modules\//;
function external() {
    return {
        name,
        resolveId(source) {
            if (source.includes('/node_modules/')) {
                return { id: source.replace(EXTERNAL_REG, ''), external: true };
            }
        },
    };
}

module.exports = external;
