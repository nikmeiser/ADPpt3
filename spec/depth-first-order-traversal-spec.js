describe('depth first traversals', function() {
    var traverse = require('../lib/depth-first-order-traversal')
    var tree = {
        levels: 4,
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
    describe('should traverse in order', function() {
        it('should return array', function() {
            expect(traverse(tree)).toEqual([8, 4, 5, 7, 10, 2, 12, 6])
        })
    })
})
