class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
    this.maxSize = 100;
  }
  enqueue(value) {
    if (this.isFull()) {
      return false;
    }
    this.queue[this.tail] = value;
    this.tail++;
    return true;
  }
  dequeue() {
    if (this.isEmpty()) {
      return false;
    }
    const item = this.queue[this.head];
    this.head++;
    return item;
  }
  peek() {
    return this.queue[this.head];
  }
  getLength() {
    return this.tail - this.head;
  }
  isEmpty() {
    return this.getLength() === 0;
  }
  isFull() {
    return this.getLength() === this.maxSize;
  }
}

module.exports = Queue;
