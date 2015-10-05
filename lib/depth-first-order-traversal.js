var order = []

var traverse = function(node) {
    if (node.left) {
        traverse(node.left);
    }
    order.push(node.val)
    if (node.right) {
        traverse(node.right);
    }
}

var depthFirst = function (tree) {
    traverse(tree.head)
    return order
}

module.exports = depthFirst
