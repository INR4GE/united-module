const lagrange = require('../tasks/332');

describe(`finds the four numbers of Lagrange's theorem`, () => {
    test('should be defined', () => {
        expect(lagrange).toBeDefined();
        expect(lagrange).not.toBeUndefined();
    });

    test('should be undefined', () => {
        expect(undefined).toBeUndefined();
    })

    test(`finds the four numbers of Lagrange's theorem`, () => {
        expect(lagrange(23)).toBe('x:1 y:2 z:3 t:3');
        expect(lagrange(54)).toBe('x:0 y:1 z:2 t:7');
    });
})