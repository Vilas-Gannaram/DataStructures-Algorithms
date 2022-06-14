function pivot(arr, start = 0, _end = arr.length - 1) {
    //  SWAP helper func
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    // we are assuming the pivot is always the first element
    let pivot = arr[start],
        swapIdx = start

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++
            swap(arr, swapIdx, i)
        }
    }

    // swap the pivot from the start to swapPoint
    swap(arr, start, swapIdx)
    return swapIdx
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIdx = pivot(arr, left, right)
        //  left
        quickSort(arr, left, pivotIdx - 1)
        //  right
        quickSort(arr, pivotIdx + 1, right)
    }
    return arr
}

console.log(quickSort([-4, 6, 9, 0, -2, 5, 3]))