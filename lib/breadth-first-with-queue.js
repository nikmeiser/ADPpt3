var breadthSearch = function (tree) {
	if (!tree || !tree.head) return false
	var queue = [],
		order = ''
	queue.push(tree.head)
	while (queue.length) {
		var parent = queue.shift()
		order += parent.val += '\n'
		if (parent.left) {
			queue.push(parent.left)
		}
		if (parent.right) {
			queue.push(parent.right)
		}
	}
	return order
}

module.exports = breadthSearch