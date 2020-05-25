const digitSum = require('../tasks/86_b')

describe('Digit sum: ', () => {
    test('should be defined', () => {
        expect(digitSum).toBeDefined();
    });
    test('expect to return proper sum', () => {
        expect(digitSum(1)).toBe(1)
        expect(digitSum(12345)).toBe(15)
    })
    test('expect to throw an error', () => {
        try {
            digitSum('a')
        } catch (e) {
            expect(e.message).toBe('You provided string')
        }
    })
})