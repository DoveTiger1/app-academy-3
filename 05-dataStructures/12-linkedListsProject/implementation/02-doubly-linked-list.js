// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Time Complexity: O(1)
        // Space Complexity: O(1), creation of new node to be inserted at head

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list

        // Write your hypothesis on the time complexity of this method here

        // Time Complexity: O(1)
        // Space Complexity: O(1), creation of new node to be inserted at head

        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode; 
        } else {
            newNode.prev = this.tail; 
            this.tail.next = newNode; 
        }

        this.tail = newNode; 
        this.length++;
    }

    removeFromHead() {

        // Remove node at head

        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: O(1)
        // Space Complexity: O(1), creation of new node to be inserted at head

        if (this.head === null) { 
            return undefined; 
        }

        let oldHead = this.head.value; 
        
        if (this.head.next) { 
            this.head.next.prev = null; 
            this.head = this.head.next;
        } else { 
            this.head = null; 
            this.tail = null;
        }

        this.length--; 
        return oldHead;
    }

    removeFromTail() {
        // Remove node at tail

        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: O(1)
        // Space Complexity: O(1), creation of new node to be inserted at head
        
        if (this.head === null) { 
            return undefined; 
        }

        let oldTail = this.tail.value; 
        this.tail = this.tail.prev; 
        this.length--; 
        return oldTail; 
    }

    peekAtHead() {
        // Return value of head node

        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: O(1)
        // Space Complexity: O(1)

        return (this.head) ? this.head.value : undefined; 
    }

    peekAtTail() {
        // Return value of tail node
        
        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: O(1)
        // Space Complexity: O(1)

        return (this.tail) ? this.tail.value : undefined; 
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
