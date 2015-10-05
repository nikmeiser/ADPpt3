describe('fibbonaci with looping', function() {
    var fib = require('../lib/fibbonaci-recursion')
    describe('insufficient call', function() {
        it('should return false from non number call', function() {
            expect(fib()).toBe(false)
            expect(fib('string')).toBe(false)
            expect(fib({})).toBe(false)
        })
        it('should return false from negative number', function() {
            expect(fib(-3)).toBe(false)
        })
    })
    describe('calls with numbers', function() {
        it('should work with numbers', function() {
            expect(fib(1)).toEqual(1)
            expect(fib(10)).toEqual(55)
        })
    })
})
