import MathProblems from './'

describe('MathProblems', () => {
  it('is an object', () => {
    expect(MathProblems).toBeDefined()
  })
  it('has functions', () => {
    expect(MathProblems.functions).toBeDefined()
  })
  it('has operators', () => {
    expect(MathProblems.operators).toBeDefined()
  })
})
