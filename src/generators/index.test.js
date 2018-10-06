import { SimpleGenerator } from './';

describe('RandomStatelessGenerator', () => {
  it('is defined', () => {
    const generator = new SimpleGenerator({min: 0, max: 9, size: 2, level: 1});
    expect(generator).toBeDefined();
  })
  it('next creates a new math problem', () => {
    const generator = new SimpleGenerator({min: 0, max: 9, size: 2, level: 1});
    const problem = generator.next('+');
    expect(problem).toBeDefined();
  })
})

describe('Problem', () => {
  it('is evaulated correctly', () => {
    const generator = new SimpleGenerator({min: 0, max: 9, size: 2, level: 1});
    const problem = generator.next('+');
    expect(problem.evaluate()).toBe(eval(problem.toString()));
  })
})
