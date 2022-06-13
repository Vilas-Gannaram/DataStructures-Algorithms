function binarySearch(array, target) {

    let start = 0,
        end = array.length - 1,
        middle = Math.floor((start + end) / 2)

    while (array[middle] !== target && start <= end) {

        //  Divide and Conquer
        if (target < array[middle]) end = middle - 1
        else start = middle + 1

        middle = Math.floor((start + end) / 2)
    }

    return (array[middle] === target) ? middle : -1
}

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 12))