import * as evalutor from './'

describe('evalutor.isSafe', () => {
  it('empty strings are valid', () => {
    expect(evalutor.isSafe('')).toBe(true)
    expect(evalutor.isSafe('   ')).toBe(true)
  })
  it('all math symbols are valid', () => {
    expect(evalutor.isSafe('01234567890')).toBe(true)
    expect(evalutor.isSafe('+-*xX/^e%<>')).toBe(true)
    expect(evalutor.isSafe('()')).toBe(true)
  })
  it('all non-math symbols are invalid', () => {
    expect(evalutor.isSafe('a@#[]')).toBe(false)
  })
  it('mixed math non-math symbols are invalid', () => {
    expect(evalutor.isSafe('2+@')).toBe(false)
  })
  it('simple binary operations are valid', () => {
    expect(evalutor.isSafe('2+2')).toBe(true)
    expect(evalutor.isSafe(' 2 - 2 ')).toBe(true)
  })
})
