import { expect } from 'chai';
import calculator from './calculator';

describe('should run test', () => {
  it('should works', () => {
    expect(2 + 2).to.equal(4);
  });
});

describe('Test', () => {
  it('should be true', () => {
    expect(test()).toBeTruthy();
  });

  describe('sum', () => {
    it('should return sum of two numbers', () => {
      const expectedResult = 5;
      expect(calculator('1 + 4')).toBe(expectedResult);
    });

    it('should return sum of two numbers', () => {
      const expectedResult = 15;
      expect(calculator('12 + 3')).toBe(expectedResult);
    });
  })
  describe('div', () => {
    it('should divide two numbers', () => {
      const expectedResult = 5;
      expect(calculator('15 / 3')).toBe(expectedResult);
    });
  });

  describe('empty', () => {
    it('should return 0 when is empty input', () => {
      const expectedResult = 0;
      expect(calculator('')).toBe(expectedResult);
    });

    it('should return 0 when no arguments passed', () => {
      const expectedResult = 0;
      expect(calculator()).toBe(expectedResult);
    });
  });

  describe('Nan', () => {
    it('should return NaN when arguments do not have number', () => {
      const expectedResult = NaN;
      expect(calculator('+')).toEqual(expectedResult);
    });
  });

  describe('Exponent', () => {
    it('should make exponent from 2 ** 3 = 8', () => {
      const expectedResult = 8;
      expect(calculator('2 ** 3')).toEqual(expectedResult);
    });
  });
});
