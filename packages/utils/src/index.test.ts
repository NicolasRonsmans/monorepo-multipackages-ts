import { hello } from './index';

describe('hello', () => {
  it('should return a string', () => {
    const str = hello();

    expect(typeof str === 'string').toBe(true);
  });
});
