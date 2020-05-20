const reverse = require('../tasks/88_b');

describe('reverse function:', () => {
    test('should be defined', () => {
        expect(reverse).toBeDefined();
        expect(reverse).not.toBeUndefined();
    });

    test('should return truthy value', () => {
        expect(reverse(45)).toBeTruthy();
    });

    test('should return falsy value', () => {
        expect(reverse('')).toBeFalsy();
        expect(reverse(null)).toBeNull();
        expect(reverse(undefined)).toBeUndefined();
    });

    test('should return reversed string or number', () => {
        expect(reverse('abracadabra')).toEqual(expect.any(String));
        expect(reverse('hello')).toBe('olleh');
        expect(reverse(1234)).toBe('4321');
    });
});
