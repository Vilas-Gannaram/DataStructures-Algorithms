# DataStructures-Algorithms
DataStructures &amp; Algorithms using Javascript

# Algorithms:

# Searching:

* JavaScript Built-In Searching algo:

    EX:-    
            let names = ['Jhon', 'Adam', 'Brad']
            names.indexOf('Brad') returns '2'

If it found 'Brad' in the names array. It returns the index of the 'Brad' else '-1'.
Similarly it has other mothods also:
    -includes,
    -find,
    -findIndex,
behind the scenes the algo for this built-in javascript methods is "Linear Search".

# Linear Search:
* Given an array, the simplest way to search for an value is to look at every element in the array and check if it's the value we want.
* TimeComplexity: O(n).

# Binary Search:
* Binary Search works only on sorted array.
* Binary Search is a much faster form of search.
* Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time.
* TimeComplexity: O(log n).

# Naive String Search:
* Suppose you want to count the number of times a smaller string appears in a longer string.
* A straight-forward approach involves checking pairs of characters individually.
