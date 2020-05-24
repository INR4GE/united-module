const sum = require('../tasks/87');

describe('function sum last m of n', () => {
    test('should be defined', () => {
        expect(sum).toBeDefined();
        expect(sum).not.toBeUndefined();
    });

    test('should return an integer', () => {
        expect(Number.isInteger(sum(50,5))).toBeTruthy();
        expect(Number.isInteger(sum(5000,2000))).toBeTruthy();
    });

    test('should return correct answer', () => {
        expect(sum(100,2)).toEqual(199);
        expect(sum(500,100)).toEqual(45050);
    });

    test('if m > n should return 0', () => {
        expect(sum(0, 10)).toEqual(0);
        expect(sum(10, 50)).toEqual(0);
    });
});