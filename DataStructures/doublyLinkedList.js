var Node = function (val) {
    this.val = val;
    this.next = null;
    this.prev = null;
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
        this.head.prev = cur
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
        cur.prev = current;
        current.next = cur;
    }
    this.length++;
    return;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.addAtHead(val);
    if (index === this.length) return !!this.addAtTail(val);

    var node, counter, current, before;
    node = new Node(val);
    counter = 0;
    current = this.head;
    while (counter < index) {
        current = current.next;
        counter++;
    }

    before = current.prev;
    node.prev = before, node.next = current;
    before.next = node, current.prev = node;

    this.length++;
};

MyLinkedList.prototype.devareAtIndex = function (index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) {
        if (this.length <= 1) {
            this.head = null;
        } else {
            this.head = this.head.next;
        }
    } else {
        var counter, current, after, before;
        counter = 0;
        current = this.head;
        while (counter < index) {
            current = current.next;
            counter++;
        }
        before = current.prev;
        if (index === this.length - 1) {
            before.next = null;
        } else {
            after = current.next;
            before.next = after, after.prev = before;
        }
    }
    this.length--;
};

var list = new MyLinkedList();
