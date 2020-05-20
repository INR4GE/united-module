const unique = require('../tasks/302');

describe('unique function:', () => {
    test('should be defined', () => {
        expect(unique).toBeDefined();
        expect(unique).not.toBeUndefined();
    });

    test('should return truthy value', () => {
        expect(unique('softserve')).toBeTruthy();
    });


    test('should return number of unique symbols', () => {
        const str = 'hello';
        const num = 123445;

        expect(unique(str)).toBe(`${str} => 4 unique digit(s)`);
        expect(unique(num)).toBe(`${num} => 5 unique digit(s)`);
    });
});
