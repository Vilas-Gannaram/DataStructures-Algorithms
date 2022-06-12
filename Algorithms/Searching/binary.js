function binarySearch(array, target) {
    var left, right, center;
    left = 0;
    right = array.length - 1;
    center = Math.floor((left + right) / 2);
    while (array[center] !== target && left <= right) {
        if (target < array[center]) {
            right = center - 1;
        } else {
            left = center + 1;
        }
        center = Math.floor((left + right) / 2);
    }
    if (array[center] === target) return center;
    return -1;
}
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));