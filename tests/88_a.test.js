const includes = require('../tasks/88_a');

describe('includes function:', () => {
    test('should be defined', () => {
        expect(includes).toBeDefined();
        expect(includes).not.toBeUndefined();
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


