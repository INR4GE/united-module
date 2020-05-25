const digitNum = require('../tasks/86_a')

describe('Digit Num', ()=> {
    test('should be defined', () => {
        expect(digitNum).toBeDefined();
    });
    test('should return proper length',()=> {
        expect(digitNum(1)).toBe(1)
        expect(digitNum(-1)).toBe(1)

    })
    test('should throw an error',() => {
        try {
            digitNum('a')
        }   catch (e) {
            expect(e.message).toBe('You provided string')
        }
    })
})
