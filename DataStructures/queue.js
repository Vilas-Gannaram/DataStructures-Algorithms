var Node = function (data) {
    this.data = data;
    this.next = null;
}

var Queue = function () {
    this.front = null;
    this.rear = null;
}

Queue.prototype.enqueue = function (data) {
    var newNode = new Node(data);
    if (!this.front) {
        this.front = newNode;
        this.rear = this.front;
    } else {
        this.rear.next = newNode;
        this.rear = newNode;
    }
    return;
}

Queue.prototype.dequeue = function (data) {
    if (!this.front) return null;
    var dequeuedNode = this.front;
    if (this.front === this.rear) {
        this.front = null;
        this.rear = null;
    } else {
        this.front = dequeuedNode.next;
    }
    return dequeuedNode;
}

Queue.prototype.peek = function () {
    if (!this.front) return null;
    return this.front;
}

Queue.prototype.isEmpty = function () {
    if (!this.front) return true;
    return false;
}

Queue.prototype.length = function () {
    if (!this.front) return 0;
    var counter, current;
    counter = 0;
    current = this.front;
    while (current.next) {
        current = current.next;
        counter++;
    }
    return counter + 1;
}

var queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log(queue);
