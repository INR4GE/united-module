const firstSumOfSquares = require('../tasks/243_a');
const getSqrtOfNum = firstSumOfSquares.getSqrtOfNum;

describe('function firstSumOfSquares', () => {
    test('should be defined', () => {
        expect(firstSumOfSquares).toBeDefined();
        expect(firstSumOfSquares).not.toBeUndefined();
    });

    test('should return string', () => {
        expect(typeof firstSumOfSquares(13)).toBe('string');
    });

    test('should return correct answer', () => {
        const res1 = 'x: 2, y: 3';
        const res2 = 'x: 3, y: 12';
        expect(firstSumOfSquares(13)).toBe(res1);
        expect(firstSumOfSquares(153)).toBe(res2);
    });

    test('if there are no pairs should return according message', () => {
        expect(firstSumOfSquares(7)).toBe('No pairs')
        expect(firstSumOfSquares(11)).toBe('No pairs')
    });

    test('if "n" < 1 should return according message ', () => {
        expect(firstSumOfSquares(0)).toBe('"n" should be greater than 1');
        expect(firstSumOfSquares(-10)).toBe('"n" should be greater than 1');
    });
});

describe('getSqrtOfNum function', () => {
    test('should return truthy value', () => {
        expect(getSqrtOfNum(16)).toBeTruthy();
        expect(getSqrtOfNum(40.45)).toBeTruthy();
    });

    test('should return falsy value', () => {
        expect(getSqrtOfNum(0)).toBeFalsy();
        expect(getSqrtOfNum(-4)).toBeFalsy();
    });

    test('should return correct answer', () => {
        expect(getSqrtOfNum(16)).toBe(4);
        expect(getSqrtOfNum(64)).toBe(8);
    });
});