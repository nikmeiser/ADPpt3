var mergeSort = function(arr) {
    var center, left, right;
    if (!arr || !(arr instanceof Array)) {
        return false
    } else if (arr.length < 2) {
        return arr
    }
    center = Math.floor(arr.length / 2)
    left = arr.slice(0, center)
    right = arr.slice(center)
    return merge(mergeSort(left), mergeSort(right))
}
var merge = function(left, right) {
    var result = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else result.push(right.shift())
    }
    while (left.length) result.push(left.shift())
    while (right.length) result.push(right.shift())
    return result
}

module.exports = mergeSort