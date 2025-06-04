import Powers from '../powers.js';

describe('Powers', () => {
  describe('square', () => {
    it('should return the square of the provided number', () => {
      const result = 9;
      const powers = new Powers();
      expect(powers.square(3)).toEqual(result);
    });
  });

  describe('cube', () => {
    it('should return the cube of the provided number', () => {
      const result = 27;
      const powers = new Powers();
      expect(powers.cube(3)).toEqual(result);
    });
  });
});
