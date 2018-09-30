import { RandomStatelessGenerator } from './';

describe('RandomStatelessGenerator', () => {
  it('is defined', () => {
    const generator = new RandomStatelessGenerator(0, 9);
    expect(generator).toBeDefined();
  })
})
