import { expect } from 'chai';
import calculator from './calculator';

describe('Calculator', () => {
  describe('Operations', () => {
    describe('Summary operation', () => {
      it('should return sum of two numbers', () => {
        expect(calculator('1 + 4')).to.equal(5);
        expect(calculator('12 + 3')).to.equal(15);
      });
    });

    describe('Difference operation', () => {
      it('should return difference of two numbers', () => {
        expect(calculator('20 - 10')).to.equal(10);
        expect(calculator('17 - 2')).to.equal(15);
      });
    });

    describe('Divide operation', () => {
      it('should return result of divide two numbers', () => {
        expect(calculator('15 / 3')).to.equal(5);
        expect(calculator('9 / 3')).to.equal(3);
      });
    });

    describe('Multiplication operation', () => {
      it('should return result of multiply two numbers', () => {
        expect(calculator('2 * 3')).to.equal(6);
        expect(calculator('5 * 3')).to.equal(15);
      });
    });

    describe('Exponent operation', () => {
      it('should make and return exponent from 2 ** 3 = 8', () => {
        expect(calculator('2 ** 3')).to.equal(8);
        expect(calculator('3 ** 3')).to.equal(27);
      });
    });
  });

  describe('Exeptions', () => {
    describe('Not passed or empty argument', () => {
      let expectedResult;

      beforeEach(() => {
        expectedResult = 0;
      });

      it('should return 0 when input is empty string', () => {
        expect(calculator('')).to.equal(expectedResult);
      });

      it('should return 0 when no arguments passed', () => {
        expect(calculator()).to.equal(expectedResult);
      });
    });

    describe('Argument without number', () => {
      it('should return NaN when arguments do not have number', () => {
        expect(calculator('+')).to.be.NaN;
        expect(calculator('*')).to.be.NaN;
      });
    });

    describe('Support for any number of spaces', () => {
      it('should support any number of spaces', () => {
        const expectedResult = 9;
        expect(calculator('2     * 2     +   5')).to.equal(expectedResult);
      });
    });
  });
});
