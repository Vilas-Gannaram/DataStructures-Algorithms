class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.bottom = null
    }
    push(data) {
        let newNode = new Node(data)

        if (!this.top) {
            this.top = newNode
            this.bottom = this.top
        } else {
            newNode.next = this.top
            this.top = newNode
        }
    }
    pop() {
        if (!this.top) return null

        let poppedNode = this.top

        if (this.top === this.bottom) {
            this.top = null
            this.bottom = null
        } else this.top = this.top.next

        return poppedNode
    }
    peek() {
        if (!this.top) return null
        return this.top
    }
    isEmpty() {
        if (!this.top) return true
        return false
    }
    size() {
        if (!this.top) return 0
        let counter = 0, current = this.top

        while (current.next) {
            current = current.next
            counter++
        }
        return counter + 1
    }
}

let stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

console.log(stack)
