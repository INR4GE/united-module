const allSumsOfSquares = require('../tasks/243_b');

describe('function allSumsOfSquares', () => {
    test('should be defined', () => {
        expect(allSumsOfSquares).toBeDefined();
        expect(allSumsOfSquares).not.toBeUndefined();
    });

    test('should return an array', () => {
        expect(Array.isArray(allSumsOfSquares(50))).toBeTruthy();
        expect(Array.isArray(allSumsOfSquares(4325))).toBeTruthy();
    });

    test('should return correct answer', () => {
        const res1 = ['x = 5 & y = 5', 'x = 7 & y = 1'];
        const res2 = ['x = 47 & y = 46', 'x = 58 & y = 31', 'x = 65 & y = 10'];
        expect(allSumsOfSquares(50)).toEqual(res1);
        expect(allSumsOfSquares(4325)).toEqual(res2);
    });

    test('if there are no pairs should return according message', () => {
        expect(allSumsOfSquares(7)).toBe('No pairs')
        expect(allSumsOfSquares(11)).toBe('No pairs')
    });

    test('if "n" < 1 should return according message ', () => {
        expect(allSumsOfSquares(0)).toBe('"n" should be greater than 1');
        expect(allSumsOfSquares(-10)).toBe('"n" should be greater than 1');
    });
});