import { RandomStatelessGenerator } from './';

describe('RandomStatelessGenerator', () => {
  it('is defined', () => {
    const generator = new RandomStatelessGenerator(0, 9);
    expect(generator).toBeDefined();
  })
  it('next creates a new math problem', () => {
    const generator = new RandomStatelessGenerator(0, 9);
    const problem = generator.next('+');
    expect(problem).toBeDefined();
  })
})
