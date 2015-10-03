describe('mergeSort', function() {
	var mergeSort = require('../lib/mergeSort.js')
	describe('incomplete and insufficient arguments', function() {
		it('should return false from a non array call', function() {
			expect(mergeSort()).toBe(false)
			expect(mergeSort({foo: 'bar'})).toBe(false)
			expect(mergeSort('string')).toBe(false)
			expect(mergeSort(4231)).toBe(false)
		})
		it('should return an empty array with an empty array as argument', function() {
			expect(mergeSort([])).toEqual([])
		})
	})
	describe('various array lengths', function () {
		it('should work with a single length array', function() {
			expect(mergeSort([5])).toEqual([5])
		})
		it('should work with odd length array', function () {
			expect(mergeSort([4,2,3,6,1])).toEqual([1,2,3,4,6])
		})
		it('should work with even length array', function() {
			expect(mergeSort([1,5,3,2])).toEqual([1,2,3,5])
		})
	})
	describe('different num types', function() {
		it('should work with floats', function() {
			expect(mergeSort([1.2,1.1,2.6,0.9])).toEqual([0.9,1.1,1.2,2.6])
		})
	})
})