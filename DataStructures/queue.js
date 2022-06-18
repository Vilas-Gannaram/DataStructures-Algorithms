//  Using linked list
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Queue_LS {
    constructor() {
        this.front = null
        this.rear = null
    }
    enqueue(data) {
        let newNode = new Node(data)
        if (!this.front) {
            this.front = newNode
            this.rear = this.front
        } else {
            this.rear.next = newNode
            this.rear = newNode
        }
    }
    dequeue() {
        if (!this.front) return null
        let dequeuedNode = this.front

        if (this.front === this.rear) {
            this.front = null
            this.rear = null
        } else this.front = dequeuedNode.next

        return dequeuedNode
    }
    peek() {
        if (!this.front) return null
        return this.front
    }
    isEmpty() {
        if (!this.front) return true
        return false
    }
    length() {
        if (!this.front) return 0
        let counter = 0, current = this.front
        while (current.next) {
            current = current.next;
            counter++;
        }
        return counter + 1
    }
}



//  Using Array
class Queue {
    constructor() {
        this.queue = []
    }
    enqueue(data) {
        this.queue.unshift(data)
    }
    dequeue() {
        return this.queue.pop()
    }
    peek() {
        return this.queue[this.queue.length - 1]
    }
    isEmpty() {
        return !this.queue.length ? true : false
        // if(!this.queue.length) return true
        // return false
    }
    length() {
        return this.queue.length
    }
}

let queue = new Queue()

queue.enqueue(5)
queue.enqueue(4)
queue.enqueue(3)
queue.enqueue(2)
queue.enqueue(1)

console.log(queue)
