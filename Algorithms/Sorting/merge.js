function merge(arr1, arr2) {
    let results = []
    //  i, j are the pointers for arr1 & arr2
    let i = 0, j = 0

    //  comparing two arrays and pushing the values in order, while both arrays had some values to compare & push
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i])
            i++
        } else {
            results.push(arr2[j])
            j++
        }
    }

    //  pushing the remaining values into results
    while (i < arr1.length) {
        results.push(arr1[i])
        i++
    }

    while (j < arr2.length) {
        results.push(arr2[j])
        j++
    }

    return results
}

function mergeSort(arr) {
    //  breaking recursion
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2),

        //  using recursion => decomposing array until it hold 1 element in it
        left = mergeSort(arr.slice(0, mid)),
        right = mergeSort(arr.slice(mid))

    return merge(left, right)
}

console.log(mergeSort([10, 24, 86, 62, 1]))