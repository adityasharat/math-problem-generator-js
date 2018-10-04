import { SimpleGenerator } from './';

describe('RandomStatelessGenerator', () => {
  it('is defined', () => {
    const generator = new SimpleGenerator(0, 9);
    expect(generator).toBeDefined();
  })
  it('next creates a new math problem', () => {
    const generator = new SimpleGenerator(0, 9);
    const problem = generator.next('+');
    expect(problem).toBeDefined();
  })
})

describe('Problem', () => {
  it('is evaulated correctly', () => {
    const generator = new SimpleGenerator(0, 9);
    const problem = generator.next('+');
    expect(problem.evaluate()).toBe(eval(problem.toString()));
  })
})
