class Node {
  constructor (value) {
    this.head = value;
    this.next = null;
  }
}

class LinkedList {
  constructor (value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  pop() {
    if (!this.head) return null;
    let temp = this.head;
    let prev = this.head;
    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    };
    return temp;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) return null;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    if (!this.head) return null;
    let temp = this.head;
    while (temp) {
      if (!temp.next) {
        return temp;
      }
      temp = temp.next;
    }
  }
  get(index) {
    let counter = 0;
    let temp = this.head;
    while (temp) {
      if (counter === index) {
        return temp;
      }
      counter++;
      temp = temp.next;
    }
    return null;
  }
}

const mylinkedList = new LinkedList(5);
mylinkedList.unshift(1);
mylinkedList.push(10);
mylinkedList.push(15);
console.log(mylinkedList);
mylinkedList.pop();
mylinkedList.shift();
console.log(mylinkedList);
console.log(mylinkedList.getFirst());