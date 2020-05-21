const add1 = require('../tasks/88_d');

describe('adds to beginning and end of the number 1', () => {
    test('should be defined', () => {
        expect(add1).toBeDefined();
        expect(add1).not.toBeUndefined();
    });

    test('should be null', () => {
        expect(null).toBeNull();
    });

    test('should be undefined', () => {
        expect(undefined).toBeUndefined();
    });

    test('adds to beginning and end of the number 1', () => {
        expect(add1(222)).toBe(12221);
        expect(add1(0)).toBe(101);
        expect(add1(432123)).toBe(14321231);
        expect(add1(2)).toBe(121);
    })

})