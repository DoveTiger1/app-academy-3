const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)

        
        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: O(1)
        // Space Complexity: O(1)

        let newTail = new SinglyLinkedNode(val); 

        if (!this.head) { 
            this.head = newTail; 
        }

        if (this.tail) { 
            this.tail.next = newTail; 
        }

        this.tail = newTail; 
        this.length++; 

        return this.length; 

    }

    dequeue() {
        // Remove node from front of queue (linked list)

        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: O(1), Reassign the head reference 
        // Space Complexity: O(1)

        if (!this.head) { 
            return null; 
        }

        let oldHead = this.head.value;  

        if (this.length === 1) { 
            this.tail = null; 
        }

        this.head = this.head.next;
        this.length--; 

        return oldHead; 
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
