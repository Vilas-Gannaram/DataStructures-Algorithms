//  JS built in sorting methods
function compareNum(a, b) {
    return a - b;
}
console.log([1, 34, 54, 3, 25, 16, 81, 56, 98, 30].sort((compareNum)));

function bubbleSort(arr) {
    var noSwaps;
    for (var i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (var j = 0; j < i - 1; j++) {
            // console.log(arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([1, 4, 3, 2, 5]));