var fib = function(n) {
	if (!n || !(typeof n === 'number') || n < 0) {
		return false
	} 
    if (n <= 2) {
        return 1
    } else {
        return (fib(n-1)+fib(n-2))
    }
}

module.exports = fib