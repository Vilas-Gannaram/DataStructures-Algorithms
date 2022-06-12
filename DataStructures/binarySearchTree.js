var Node = function (data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

var BinarySearchTree = function () {
    this.root = null;
}

BinarySearchTree.prototype.insert = function (data) {
    var newNode = new Node(data);
    if (!this.root) {
        this.root = newNode;
        return this;
    } else {
        var current = this.root;
        while (true) {
            if (data === current.data) return undefined;
            if (data > current.data) {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            } else if (data < current.data) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }
        }
    }
}

BinarySearchTree.prototype.find = function (data) {
    if (!this.root) return false;
    var current = this.root;
    var found = false;
    while (current && !found) {
        if (data < current.data) {
            current = current.left;
        } else if (data > current.data) {
            current = current.right;
        } else {
            found = true;
        }
    }
    if (!found) return undefined;
    return current;
}
// Tree Traversing BFS & DFS:
BinarySearchTree.prototype.Breadth_First_Search = function () {
    var node, visited, queue;
    node = this.root;
    visited = [];
    queue = [];
    queue.push(this.root);
    while (queue.length) {
        node = queue.shift();
        visited.push(node.data);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return visited;
}

BinarySearchTree.prototype.DFS_Pre_Order = function () {
    var visited = [];
    function traverse(node) {
        visited.push(node.data);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
}

BinarySearchTree.prototype.DFS_Post_Order = function () {
    var visited = [];
    function traverse(node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        visited.push(node.data);
    }
    traverse(this.root);
    return visited;
}

BinarySearchTree.prototype.DFS_In_Order = function () {
    var visited = [];
    function traverse(node) {
        if (node.left) traverse(node.left);
        visited.push(node.data);
        if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);


console.log(tree);