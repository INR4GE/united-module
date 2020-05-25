const perfectsUpToN = require('../tasks/330')
const isPerfect = perfectsUpToN.isPerfect

describe('Function isPerfect: ',() => {
    test('should be defined', () => {
        expect(isPerfect).toBeDefined()
    })
    test('should return true', () => {
        expect(isPerfect(6)).toBe(true)
        expect(isPerfect(5)).toBe(false)
    })
})
describe('Function perfectsUpToN: ',() => {
    test('should be defined', () => {
        expect(perfectsUpToN).toBeDefined()
    })
    test('should return results', () => {
        expect(perfectsUpToN(10000)).toEqual([1,6,28,496,8128])
        expect(perfectsUpToN(10000)).toBeInstanceOf(Array)
    })
})
