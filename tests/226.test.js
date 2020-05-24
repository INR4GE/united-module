const mutual = require('../tasks/226');

describe('function mutual', () => {
    test('should be defined', () => {
        expect(mutual).toBeDefined();
        expect(mutual).not.toBeUndefined();
    });

    test('should return an array', () => {
        expect(Array.isArray(mutual(8,4))).toBeTruthy();
        expect(Array.isArray(mutual(20, -10))).toBeTruthy();
    });

    test('should return correct answer', () => {
        expect(mutual(4, 8)).toEqual([ 8, 16, 24, 32]);
        expect(mutual(20, 30)).toEqual([60,120,180,240,300,360,420,480,540,600]);
    });

    test('if input values is equal, output length equal to value', () => {
        expect(mutual(7, 7).length).toEqual(7)
        expect(mutual(11, 11).length).toEqual(11)
    });
});