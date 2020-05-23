const maxIntPow = require('../tasks/107');
const checkNum = maxIntPow.checkNum;
describe('maxIntPow function', () => {
    test('should be defined', () => {
        expect(maxIntPow).toBeDefined();
        expect(maxIntPow).not.toBeUndefined();
    });

    test('should be number', () => {
        expect(typeof maxIntPow(256)).toBe('number');
    });

    test('should be less than m', () => {
        expect(4 ** (maxIntPow(256))).toBeLessThan(256);
        expect(4 ** (maxIntPow(512))).toBeLessThan(512);
    });
});

describe('checkNum function', () => {
    test('should return truthy value', () => {
        expect(checkNum(256)).toBeTruthy();
        expect(checkNum(512)).toBeTruthy();
    });

    test('should be greater than 1', () => {
        expect(checkNum(50)).toBeGreaterThan(1);
        expect(checkNum(2)).toBeGreaterThan(1);
    });

    test('should return falsy value', () => {
        expect(checkNum(-15)).toBeFalsy();
        expect(checkNum(0)).toBeFalsy();
    });
});