class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
  }

  preppend(value) {
    const newNode = new Node(value);
    let currentHead = this.head;
    if (this.head) {
      this.head = newNode;
      this.head.next = currentHead;
    } else {
      this.head = newNode;
    }
  }

  size() {
    if (!this.head) return 0;
    let currentNode = this.head;
    let counter = 1;
    while (currentNode.next) {
      counter++;
      currentNode = currentNode.next;
    }
    return counter;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  at(index) {
    let currentNode = this.head;
    let counter = 0;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  pop() {
    let currentNode = this.head;
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }
    let oldTail = currentNode.next;
    currentNode.next = null;
    return `removed ${oldTail.value}`;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.value === value || currentNode.next.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  find(value) {
    let currentNode = this.head;
    let counter = 0;
    while (currentNode.next) {
      if (currentNode.value === value || currentNode.next.value === value) {
        return counter;
      }
      counter++;
      currentNode = currentNode.next;

      return null;
    }
  }

  toString() {
    if (!this.head) return 'No nodes in linked list';
    let currentNode = this.head;
    let string = `(${currentNode.value}) -> `;
    while (currentNode.next) {
      currentNode = currentNode.next;
      string += `(${currentNode.value}) -> `;
    }
    string += `null`;
    return string;
  }

  // extra credit

  insertAt(value, index) {
    const newNode = new Node(value);
    let currentNode = this.head;
    for (let count = 1; count <= index; count++) {
      if (count === index) {
        let oldNext = currentNode.next;
        currentNode.next = newNode;
        newNode.next = oldNext;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  removeAt(index) {
    let currentNode = this.head;
    for (let count = 0; count <= index; count++) {
      if (count + 1 === index) {
        currentNode.next = currentNode.next.next;
      }
      currentNode = currentNode.next;
    }
  }
}

const myList = new LinkedList();
myList.append('first');
myList.append('second');
myList.append('third');
myList.append('fourth');
myList.preppend('new first');
myList.preppend('second new first');
console.log(myList.insertAt('sus', 3));
console.log(myList.toString());
console.log(myList.removeAt(2));
console.log(myList.size());
console.log(myList.at(2));
console.log(myList.pop());
console.log(myList.contains('second new first'));
console.log(myList.toString());
console.log(myList.find('third'));
