class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    const newNode = new LinkedListNode(val);
    
    newNode.next = this.head;
    this.head = newNode;
  
    this.length++; 
  }

  addToTail(val) {
    const newNode = new LinkedListNode(val); 
    this.length++; 

    // Empty list 
    if (this.head === null) { 
      this.head = newNode; 
      return; 
    }

    let curr = this.head; 
    while (curr.next != null) { 
      curr = curr.next; 
    }

    curr.next = newNode; 
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;