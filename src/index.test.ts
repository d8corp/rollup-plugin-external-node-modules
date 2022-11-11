import env from '.'

describe('rollup-plugin-external-node-modules', () => {
  it('should have name', () => {
    expect(env().name).toBe('rollup-plugin-external-node-modules')
  })
})
