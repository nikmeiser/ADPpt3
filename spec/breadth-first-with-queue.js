describe('breadth first with queue', function() {
    var search = require('../lib/breadth-first-with-queue')
    var tree = {
        head: {
            val: 10,
            left: {
                val: 5,
                left: {
                    val: 4,
                    left: {
                        val: 8
                    },
                    right: null
                },
                right: {
                    val: 7,
                    left: null,
                    right: null
                }
            },
            right: {
                val: 12,
                left: {
                    val: 2,
                    left: null
                },
                right: {
                    val: 6,
                    left: null,
                    right: null
                }
            }
        }
    }
    describe('invalid trees', function() {
        it('should return false from empty call', function() {
            expect(search()).toEqual(false)
        })
        it('should return false from invalid tree', function() {
            expect(search({
                foo: 'bar'
            })).toEqual(false)
        })
    })
    describe('tree traversal', function() {
        it('should properly return node values', function() {
            expect(search(tree)).toEqual('10\n5\n12\n4\n7\n2\n6\n8\n')
        })
    })
})
