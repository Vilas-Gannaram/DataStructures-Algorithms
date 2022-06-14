# DataStructures-Algorithms
DataStructures &amp; Algorithms using Javascript

# Algorithms:

# Searching:

* JavaScript Built-In Searching algo:
    ex:-    
        `let names = ['Jhon', 'Adam', 'Brad']`,
        ` names.indexOf('Brad') returns '2'`

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

---------------------------------------------------

# Sorting:

* Sorting is the process of rearranging the items in a collection (e.g: Array), so that the items are in some kind of order.
* Javascript built-in sorting methods:
    ex:
        .sort() method:
        `['kiwi', 'apple', 'grapes', 'banana'].sort()`,
        returns `['apple', 'banana', 'grapes', 'kiwi']`
        It worked!.

    but,
        `[14, 42, 23, 342, 53].sort()`,
        returns `[14, 23, 342, 42, 53]`
        it doesn't not worked because it sorts based on unicode code points.

* for this to work we need a helper function
    function compareNum(a, b) {
        return a - b
    }
    `[14, 42, 23, 342, 53].sort(compareNum)`,
    returns `[ 14, 23, 42, 53, 342 ]`
we can also use it on strings
    function compareLen(str1L, str2L) {
        return str1.length - str2.length
    }
    `['kiwi', 'apple', 'grapes', 'banana'].sort(compareLen)`,
    returns `['apple', 'banana', 'grapes', 'kiwi']`

# Bubble Sort:
* A sorting algorithm where the largest values bubbles up to top. (One at a time)
* TimeComplexity: O(n*2).
* SpaceComplexity: O(1).

# Selection Sort:
* Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.
* TimeComplexity: O(n*2).
* SpaceComplexity: O(1).

# Insertion Sort:
* Builds up the sort by gradually creating a larger left half which is always sorted.
* TimeComplexity: O(n*2).
* SpaceComplexity: O(1).

# Merge Sort:
* It's a combination of two things - merging and sorting.
* Exploits the fact that arrays of 0 or 1 element are always sorted.
* Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array.
* Merging Arrays:
- In order to implement merge sort, it's useful to first implement a func responsible for merging two sorted arrays
- Given two arrays which are sorted, this helper func should create a new array which is also sorted, and consists of all of the elements in the two input arrrays.
- This func should run in O(n + m) time and O(n + m) in space and should not modify the params passes to it.
* Remember before merging, we need to decompose the arrays until it hold 1 element each by using recursion.
* TimeComplexity: O(n log (n)).
* SpaceComplexity: O(n).

# Quick Sort:
* Like merge sort, exploits the fact that arraus of 0 or 1 elements are always sorted.
* Works by selecting one element (called "pivot") and finding the index where the pivot should end up in the sorted array.
* Once the pivot is positioned appropriately, quick sort can be applied on either side of pivot.
* Picking a pivot:
- The runtime of quick sort depends in part on how one selects the pivot.
- Ideally, the pivot should be chosen so that it's roughly the medium value in the data set you're sorting.
- For simplicity, we'll always choose the pivot to be the first element.
* TimeComplexity: O(n*2).
* SpaceComplexity: O(log (n)).

# Radix Sort:
* Radix sort is a special sorting algorithm that works on lists of numbers.
* It never make comparisons between elements.
* It exploits the fact that information about the size of a number is encoded in the number of digits.
* More digits means a bigger number.
* In order to implement radix sort, it's helpfull to build a few helper functions first:
- getDigit(num, place): returns the digit in num at the given place.
- digitCount(num):  returns the number of digits in num.
- mostDigits(nums): Given an array of numbers, returns the number of digit in the largest numbers in the list.
* TimeComplexity: O(nk) k => no. of digits in the numbers(avg).
* SpaceComplexity: O(n + k).