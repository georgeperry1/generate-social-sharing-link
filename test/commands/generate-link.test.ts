import {expect, test} from '@oclif/test'

describe('generate link', () => {
  test
  .stdout()
  .command(['generate link'])
  .it('runs generate link', ctx => {
    expect(ctx.stdout).to.contain('generate link world')
  })

  test
  .stdout()
  .command(['generate link', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
