const { isGameOver, solutions } = require('./isGameOver.js');

describe('isGameOver', () => {
  solutions.forEach(solution => {
    it(`works for ${solution.join(', ')}`, () => {
      expect(isGameOver(solution)).toBeTruthy();
    })
  });
});
