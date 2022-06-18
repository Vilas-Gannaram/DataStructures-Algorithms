// Very similar to Binary Search Tree, but with some different rules

// In MaxBinaryHeap: parent nodes are always larger than child nodes-
// Each parent node has at most 2 child nodes, No implied ordering between siblings.
// A BinaryHeap is as compact as possible, All the children of each node are as full be and left children are filled out first.
// For any index of an array n: left child is stored at 2n+1, right child is at 2n+2.
// In MinBinaryHeap: parent nodes are always smaller than child nodes

class MaxBinaryHeap {
    constructor() {
        this.values = []
    }
    insert(element) {
        this.values.push(element)
        this.bubbleUp()
    }
    bubbleUp() {
        let idx = this.values.length - 1
        const element = this.values[idx]

        while (idx > 0) {
            // For any child node at index n, its parent is at index (n-1)/2 floored.
            let parentIdx = Math.floor((idx - 1) / 2),
                parent = this.values[parentIdx]

            if (element <= parent) break
            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx
        }

    }
}

let heap = new MaxBinaryHeap()

heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)