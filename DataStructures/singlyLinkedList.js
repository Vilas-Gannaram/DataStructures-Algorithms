class Node {
    constructor(val) {
        this.val = val
        this.next = null
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
            this.head = cur
        }
        this.length++
    }
    addAtTail(val) {
        let cur = new Node(val)
        if (!this.head) this.head = cur
        else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = cur
        }
        this.length++
    }
    addAtIndex(index, val) {
        if (index < 0 || index > this.length) return false
        if (index === this.length) return !!this.addAtTail(val)
        if (index === 0) return !!this.addAtHead(val)

        let node = new Node(val), counter = 0, current = this.head

        while (counter < index - 1) {
            current = current.next
            counter++
        }

        let after = current.next
        current.next = node
        node.next = after

        this.length++
    }
    deleteAtIndex(index) {
        if (index < 0 || index >= this.length) return false
        if (index === 0) {
            this.head = this.head.next
        } else {
            let counter = 0, current = this.head

            while (counter < index - 1) {
                current = current.next
                counter++
            }
            let fNode = current.next, after = fNode.next
            current.next = after
        }
        this.length--
    }
}