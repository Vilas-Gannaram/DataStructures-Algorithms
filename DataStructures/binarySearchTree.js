class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(data) {
        let newNode = new Node(data)
        if (!this.root) {
            this.root = newNode
            return this
        } else {
            let current = this.root
            while (true) {
                if (data === current.data) return undefined
                if (data > current.data) {
                    if (!current.right) {
                        current.right = newNode
                        return this
                    }
                    current = current.right
                } else if (data < current.data) {
                    if (!current.left) {
                        current.left = newNode
                        return this
                    }
                    current = current.left
                }
            }
        }
    }
    find(data) {
        if (!this.root) return false
        let current = this.root, found = false

        while (current && !found) {
            if (data < current.data) current = current.left
            else if (data > current.data) current = current.right
            else found = true

        }
        if (!found) return undefined
        return current
    }
    // Tree Traversing BFS & DFS:
    Breadth_First_Search() {
        let node = this.root, visited = [], queue = []

        queue.push(this.root)
        while (queue.length) {
            node = queue.shift()
            visited.push(node.data)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return visited
    }
    DFS_Pre_Order() {
        let visited = []
        function traverse(node) {
            visited.push(node.data)

            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(this.root)
        return visited
    }
    DFS_Post_Order() {
        let visited = []
        function traverse(node) {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)

            visited.push(node.data)
        }
        traverse(this.root)
        return visited
    }
    DFS_In_Order() {
        let visited = [];
        function traverse(node) {
            if (node.left) traverse(node.left)
            visited.push(node.data)
            if (node.right) traverse(node.right)
        }
        traverse(this.root)
        return visited
    }
}

let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(3)
tree.insert(8)
tree.insert(15)
tree.insert(20)

console.log(tree)