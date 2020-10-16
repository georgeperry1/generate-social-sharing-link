import { expect, test } from '@oclif/test'

describe('generate link', () => {
  test
  .stdout()
  .command(['help'])
  .it('runs help', ctx => {    
    expect(ctx.stdout).to.contain('help')
  })
})
