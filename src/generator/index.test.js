import { RandomStatelessGenerator } from './';

describe('evalutor.isSafe', () => {
  it('empty strings are valid', () => {
    const generator = new RandomStatelessGenerator(0, 9);
    const problem = generator.next('+');
    expect(problem).toBeDefined();
  })
})
