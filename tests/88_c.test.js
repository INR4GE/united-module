const swap = require('../tasks/88_c');

describe('replaces the first digit with the last:', () => {
    test('should be defined', () => {
        expect(swap).toBeDefined();
        expect(swap).not.toBeUndefined();
    });

    test('should be truthy', () => {
        expect(1234).toBeTruthy();
    })

    test('should be null', () => {
        expect(null).toBeNull();
    });

    test('should be undefined', () => {
        expect(undefined).toBeUndefined();
    })

    test('replaces the first digit with the last', () => {
        expect(swap(12345)).toBe(52341);
        expect(swap(1)).toBe(1);
        expect(swap(21)).toBe(12);
        expect(swap(0)).toBe(0);
    });

})