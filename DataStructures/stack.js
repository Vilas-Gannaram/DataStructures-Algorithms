// Using Linked List:
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Stack_LS {
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



// Using Array

class Stack {
    constructor() {
        this.stack = []
    }
    push(data) {
        this.stack.push(data)
    }
    pop() {
        return this.stack.pop()
    }
    peek() {
        return this.stack[this.stack.length - 1]
    }
    isEmpty() {
        return !this.stack.length ? true : false
    }
    size() {
        return this.stack.length
    }
    getMin() {
        if (!this.stack.length) return null
        if (this.stack.length === 1) return this.stack[0]

        let min = this.stack[0]

        for (let i = 1; i < this.stack.length; i++) {
            if (this.stack[i] < min) min = this.stack[i]
        }
        return min
    }
}

let stack = new Stack()

stack.push(5)
stack.push(4)
stack.push(3)
stack.push(2)
stack.push(1)

console.log(stack)
