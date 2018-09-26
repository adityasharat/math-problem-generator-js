import MathProblems from './'

describe('MathProblems', () => {
  it('is an object', () => {
    expect(MathProblems).toBeDefined()
  })
  it('has evaluator', () => {
    expect(MathProblems.evaluator).toBeDefined()
  })
})
