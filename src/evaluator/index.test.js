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

describe('evalutor.evaluate', () => {
  it('empty string', () => {
    expect(evalutor.evaluate('')).toBeUndefined()
    expect(evalutor.evaluate('   ')).toBeUndefined()
  })
  it('2 + 2', () => {
    expect(evalutor.evaluate('2 + 2')).toBe(4)
  })
  it('2 - 2', () => {
    expect(evalutor.evaluate('2 - 2')).toBe(0)
  })
  it('2 * 3', () => {
    expect(evalutor.evaluate('2 * 3')).toBe(6)
  })
  it('1 + 2 * 3', () => {
    expect(evalutor.evaluate('1 + 2 * 3')).toBe(7)
  })
  it('(1 + 2) * 3', () => {
    expect(evalutor.evaluate('(1 + 2) * 3')).toBe(9)
  })
  it('unsafe expression should throw', () => {
    expect(() => {
      evalutor.evaluate('blah')
    }).toThrow()
  })
  it('invalid expression should throw', () => {
    expect(() => {
      evalutor.evaluate('(1 + 2 * 3')
    }).toThrow()
  })
  /*it('2 ^ 4', () => {
    expect(evalutor.evaluate('2 ^ 4')).toBe(16)
  })*/
})
