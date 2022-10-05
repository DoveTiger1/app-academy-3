// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) { 
        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: O(1), where we push th
        // Space Complexity: O(1), no creation of extra space other than inserting the node

        // Add node of val to head of linked list
        let newNode = new SinglyLinkedNode(val);
        newNode.next = this.head; 
        this.head = newNode; 
        this.length++; 
        return this;
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Time Complexity: O(n), where n is the number of nodes 
        // Space Complexity: O(1), no creation of extra space other than inserting the node

        // Add node of val to tail of linked list

        let newNode = new SinglyLinkedNode(val);
        this.length++;

        if (!this.head) {
            this.head = newNode; 
            return this; 
        }

        let curr = this.head;
        while (curr.next != null) {
            curr = curr.next;
        }
        curr.next = newNode;
        return this; 
    }

    removeFromHead() {
        // Remove node at head

        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: O(1) 
        // Space Complexity: O(1)

        if (this.head === null) { 
            return undefined; 
        }

        const oldHead = this.head; 
        this.head = this.head.next; 
        this.length--; 

        return oldHead; 
    }

    removeFromTail() {
        // Remove node at tail

        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: O(n), where n is the number of nodes in the linked list  
        // Space Complexity: O(1)
        
        if (!this.head) { 
            return undefined; 
        }

        let oldTail; 
        
        if (this.length === 1) { 
            this.length--;
            oldTail = this.head; 
            this.head = null; 
            return oldTail;
        }

        let curr = this.head; 
        while (curr.next.next) {
            curr = curr.next; 
        }
        this.length--;
        oldTail = curr.next; 
        curr.next = null;

        return oldTail;
    }

    peekAtHead() {
        // Return value of head node

        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: O(1)
        // Space Complexity: O(1)
        return (this.length === 0) ? undefined : this.head.value; 
    }

    print() {
        // Print out the linked list
        
        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: O(n), where n is the number of nodes in the linked list  
        // Space Complexity: O(1)

        let curr = this.head; 
        while (curr) { 
            console.log(curr.value); 
            curr = curr.next; 
        }
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
