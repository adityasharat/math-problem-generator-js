import common from './'

describe('common.add', () => {
  it('adds 0 numbers', () => {
    expect(common.add()).toBe(0)
  })
  it('adds 1 number', () => {
    expect(common.add(1)).toBe(1)
  })
  it('adds 2 numbers', () => {
    expect(common.add(2, 2)).toBe(4)
  })
  it('adds negative numbers', () => {
    expect(common.add(-2, -2)).toBe(-4)
  })
  it('adds floating numbers', () => {
    expect(common.add(2.2, 1.8)).toBe(4)
  })
})

describe('common.sub', () => {
  it('subtracts 0 numbers', () => {
    expect(common.sub()).toBe(0)
  })
  it('subtracts 1 number', () => {
    expect(common.sub(1)).toBe(-1)
  })
  it('subtracts 2 numbers', () => {
    expect(common.sub(2, 2)).toBe(0)
  })
  it('subtracts negative numbers', () => {
    expect(common.sub(-2, -2)).toBe(0)
  })
  it('subtracts floating numbers', () => {
    expect(common.sub(2.2, 1.8)).toBe(2.2 - 1.8)
  })
})
