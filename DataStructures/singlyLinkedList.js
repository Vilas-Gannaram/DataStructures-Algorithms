var Node = function (val) {
    this.val = val;
    this.next = null;
};

var MyLinkedList = function () {
    this.head = null;
    this.length = 0;
};

MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.length) return -1;
    if (index === 0) return this.head.val;

    var counter, current;
    counter = 0;
    current = this.head;
    while (counter < index && current.next) {
        current = current.next;
        counter++;
    }
    return current.val;
};

MyLinkedList.prototype.addAtHead = function (val) {
    var cur = new Node(val);
    if (!this.head) {
        this.head = cur;
    } else {
        cur.next = this.head;
        this.head = cur;
    }
    this.length++;
    return;
};

MyLinkedList.prototype.addAtTail = function (val) {
    var cur = new Node(val);
    if (!this.head) {
        this.head = cur;
    } else {
        var current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = cur;
    }
    this.length++;
    return;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.addAtHead(val);
    if (index === this.length) return !!this.addAtTail(val);

    var node, counter, current, after;
    node = new Node(val);
    counter = 0;
    current = this.head;
    while (counter < index - 1) {
        current = current.next;
        counter++;
    }
    after = current.next;
    current.next = node;
    node.next = after;

    this.length++;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) {
        this.head = this.head.next;
    } else {
        var counter, current, after, fNode;
        counter = 0;
        current = this.head;
        while (counter < index - 1) {
            current = current.next;
            counter++;
        }
        fNode = current.next;
        after = fNode.next;
        current.next = after;
    }
    this.length--;
};

var list = new MyLinkedList();

list.addAtHead(3);
list.addAtTail(4);
list.addAtIndex(0, 2);
list.addAtIndex(0, 1);
list.addAtTail(5);

console.log(list);



