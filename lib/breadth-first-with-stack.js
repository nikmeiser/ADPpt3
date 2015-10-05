var log = (function() {
    var result = ''
    var spy = function(input) {
        if (!input) {
            return result
        }
        result += input += '\n'
    }
    return spy
})()

var breadthSearch = function(tree) {
    if (!tree || !tree.head) {
        return false
    }
    var node = tree.head
    for (i = 0; i < tree.levels; i++) {
        printTree(node, i, 0)
    } 
    return log()
}

var printTree = function(node, target, level) {
    if (target > level) {
        if (node.left) {
            printTree(node.left, target, level + 1)
        }
        if (node.right) {
            printTree(node.right, target, level + 1)
        }
    } else log(node.val)
}

module.exports = breadthSearch
