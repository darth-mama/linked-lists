/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) {
      throw new Error("List is empty");
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = newTail;
      this.tail.next = null;
    }

    this.length--;
    return current.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) {
      throw new Error("List is empty");
    }

    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
    }

    let current = this.head;
    let count = 0;

    while (current) {
      if (count === idx) {
        return current.val;
      }
      current = current.next;
      count++;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
    }

    let current = this.head;
    let count = 0;

    while (current) {
      if (count === idx) {
        current.val = val;
        return;
      }
      current = current.next;
      count++;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error("Invalid index");
    }

    if (idx === 0) {
      this.unshift(val);
      return;
    }

    if (idx === this.length) {
      this.push(val);
      return;
    }

    const newNode = new Node(val);
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === idx - 1) {
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
        return;
      }
      current = current.next;
      count++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
    }

    if (idx === 0) {
      return this.shift();
    }

    let current = this.head;
    let count = 0;
    let prev = null;

    while (current) {
      if (count === idx) {
        prev.next = current.next;
        if (idx === this.length - 1) {
          this.tail = prev;
        }
        this.length--;
        return current.val;
      }
      prev = current;
      current = current.next;
      count++;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0;
    }

    let total = 0;
    let current = this.head;

    while (current) {
      total += current.val;
      current = current.next;
    }

    return total / this.length;
  }
}

module.exports = LinkedList;
