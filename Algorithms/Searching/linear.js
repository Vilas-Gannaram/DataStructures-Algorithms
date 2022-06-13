function linearSearch(array, target) {
    //  Looping through the array
    for (var i = 0; i < array.length; i++) {
        //  current element is equals to target ?
        if (array[i] === target) return i;
    }

    return -1;
}


console.log(linearSearch([12, 43, 54, 39, 87, 32], 87))