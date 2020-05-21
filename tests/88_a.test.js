const includes = require('../tasks/88_a');

describe('includes function:', () => {
    test('should be defined', () => {
        expect(includes).toBeDefined();
        expect(includes).not.toBeUndefined();
    });

    test('should return truthy value', () => {
        expect(includes('softserve')).toBeTruthy();
    });

    test('should return falsy value', () => {
        expect(includes({a: 1})).toBeFalsy();
        expect(includes([1, 2])).toBeFalsy();
        expect(includes(null)).toBeFalsy();
    });

    test('should return is pow(n) includes "3"', () => {
        const include = `n² includes 3`;
        const miss = `n² missed 3`;

        expect(includes(6)).toBe(include);
        expect(includes('6')).toBe(include);

        expect(includes(4)).toBe(miss);
        expect(includes('4')).toBe(miss);
    });
});


