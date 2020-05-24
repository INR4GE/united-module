const mersens = require('../tasks/559');

describe('function mersens', () => {
    test('should be defined', () => {
        expect(mersens).toBeDefined();
        expect(mersens).not.toBeUndefined();
    });

    test('should return an array', () => {
        expect(Array.isArray(mersens(8))).toBeTruthy();
        expect(Array.isArray(mersens(2000))).toBeTruthy();
    });

    test('should return correct answer', () => {
        expect(mersens(12)).toEqual([ 1, 3, 7]);
        expect(mersens(2000)).toEqual([ 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023]);
    });
});