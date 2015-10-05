var fib = function (n) {
	if (!n || !(typeof n === 'number') || n < 0) {
		return false
	}
	var previous = 0,
		current = 1,
		next = 1,
		result = []
	for (i = 0; i < n; i++) {
		result.push(current)
		previous = current;
		current = next;
		next = previous + current
	}
	return result
}

module.exports = fib