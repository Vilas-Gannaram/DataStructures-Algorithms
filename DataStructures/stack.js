var Node = function (data) {
    this.data = data;
    this.next = null;
}

var Stack = function () {
    this.top = null;
    this.bottom = null;
}

Stack.prototype.push = function (data) {
    var newNode = new Node(data);
    if (!this.top) {
        this.top = newNode;
        this.bottom = this.top;
    } else {
        newNode.next = this.top;
        this.top = newNode;
    }
    return;
}

Stack.prototype.pop = function () {
    if (!this.top) return null;
    var poppedNode = this.top;
    if (this.top === this.bottom) {
        this.top = null;
        this.bottom = null;
    } else {
        this.top = this.top.next;
    }
    return poppedNode;
}

Stack.prototype.peek = function () {
    if (!this.top) return null;
    return this.top;
}

Stack.prototype.isEmpty = function () {
    if (!this.top) return true;
    return false;
}

Stack.prototype.size = function () {
    if (!this.top) return 0;
    var counter = 0;
    var current = this.top;
    while (current.next) {
        current = current.next;
        counter++;
    }
    return counter + 1;
}

var stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);


console.log(stack)
