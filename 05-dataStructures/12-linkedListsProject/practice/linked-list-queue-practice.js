// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        // this.length = 0;
        // this.sum = 0; 
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity
        
        // Time Complexity: O(n)
        // Space Complexity: O(1)
        let length = 0; 
        let curr = this.head; 
        while (curr) { 
            length++; 
            curr = curr.next;
        }

        return length; 

        // Time Complexity: O(1)
        // Space Complexity: O(1)
        // Add a length property to the constructor and increment or decrement 
        // whenever we call methods to remove or add nodes to the linked list 
        // Then just reference this.length
        // However we trade space for time

        // return this.length; 
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes

        // Write your hypothesis on the time complexity of this method here

        let sum = 0; 
        let curr = this.head; 
        while (curr) { 
            sum += curr.value; 
            curr = curr.next;
        }

        return sum; 

        // Time Complexity: O(1)
        // Space Complexity: O(1)
        // Add a sum property to the constructor and increment or decrement 
        // whenever we call methods to add or remove nodes value to the linked list 
        // Then just reference this.sum
        // However we trade space for time

        // return this.sum; 
    }

    averageValue() {
        // Returns the average value of all the nodes

        // Write your hypothesis on the time complexity of this method here

        // Time Complexity: O(2n) => O(n)
        // Space Complexity: O(1)

        return this.sumOfNodes() / this.listLength(); 
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head

        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: O(n) 
        // Space Complexity: O(1)

        let i = 0; 
        let curr = this.head; 

        while (i < n && curr) { 
            i++; 
            curr = curr.next; 
        }

        return curr;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here

        // Time Complexity: O(2n) => O(n)
            // mid : O(n)
            // findNthNode: O(n)
        // Space Complexity: O(1)

        let mid = Math.floor((this.listLength() - 1) / 2); // rounded down 

        return this.findNthNode(mid); 
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: O(n*(n+n)) => O(2n^2) => O(n^2)
        // Space Complexity: O(n)

        let reverse = new SinglyLinkedList(); 
        let length = this.listLength(); 

        while (length > 0) { 
            let tail = this.findNthNode(length - 1); // O(n)
            reverse.addToTail(tail.value); // O(n)
            length--; 
        }

        return reverse;
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: O(n)
        // Space Complexity: O(1)

        let curr = this.head; 
        let prev = this.head; 

        while (curr) { 
            (curr.next === null) ? this.head = curr : null;

            curr.next = prev; 
            prev = curr;
            curr = curr.next;
        }

        return this; 
    }
}

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
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Set tail and head pointer and move towards the middle  
            // Check head and tail pointers are not the same

        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: O(n)
        // Space Complexity: O(1)

        let head = this.head; 
        let tail = this.tail; 

        while (head !== tail && head.next !== tail) { 
            head = head.next; 
            tail = tail.prev; 
        }

        return head; 
        
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: O(n)
        // Space Complexity: O(n)
        
        let reverse = new DoublyLinkedList(); 
        let curr = this.tail; 
        reverse.head = curr; 

        while (curr) { 
            let oldPrev = curr.prev; 
            let oldNext = curr.next;

            curr.next = oldPrev; 
            curr.prev = oldNext; 
            
            curr = curr.next; 
            // since curr.next points to previous pointer 
            // iterates in reverse 
        }

        // the head of the old linked list is now the tail of the reverse
        reverse.tail = curr; 

        return reverse; 
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: O(n)
        // Space Complexity: O(1)

        let curr = this.tail; 
        this.head = this.tail; // appoint the head to the old tail 

        while (curr) { 
            let oldNext = curr.next; 
            let oldPrev = curr.prev; 

            curr.next = oldPrev; 
            curr.prev = oldNext; 

            curr = curr.next; // iterates in reverse order
        }

        this.tail = curr; // appoint to the old head
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
