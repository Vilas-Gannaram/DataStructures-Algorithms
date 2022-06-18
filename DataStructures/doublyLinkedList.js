class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}
class MyLinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }
    get(index) {
        if (index < 0 || index >= this.length) return -1
        if (index === 0) return this.head.val

        let counter = 0, current = this.head

        while (counter < index && current.next) {
            current = current.next
            counter++
        }
        return current.val
    }
    addAtHead(val) {
        let cur = new Node(val)
        if (!this.head) this.head = cur
        else {
            cur.next = this.head
            this.head.prev = cur
            this.head = cur
        }
        this.length++
    }
    addAtTail(val) {
        let cur = new Node(val), current = this.head

        if (!this.head) this.head = cur
        else {
            while (current.next) {
                current = current.next
            }
            cur.prev = current
            current.next = cur
        }
        this.length++

    }
    addAtIndex(index, val) {
        if (index < 0 || index > this.length) return false
        if (index === this.length) return !!this.addAtTail(val)
        if (index === 0) return !!this.addAtHead(val)

        let node = new Node(val), counter = 0, current = this.head, before

        while (counter < index) {
            current = current.next
            counter++
        }

        before = current.prev
        node.prev = before, node.next = current
        before.next = node, current.prev = node
        this.length++
    }
    deleteAtIndex(index) {
        if (index < 0 || index >= this.length) return false
        if (index === 0) {
            if (this.length <= 1) this.head = null
            else this.head = this.head.next
        } else {
            let counter = 0, current = this.head, after, before

            while (counter < index) {
                current = current.next;
                counter++;
            }
            before = current.prev

            if (index === this.length - 1) {
                before.next = null
            } else {
                after = current.next
                before.next = after, after.prev = before
            }
        }
        this.length--
    }
}

let list = new MyLinkedList()

list.addAtHead(3)
list.addAtTail(4)
list.addAtIndex(0, 2)
list.addAtIndex(0, 1)
list.addAtTail(5)

console.log(list)
