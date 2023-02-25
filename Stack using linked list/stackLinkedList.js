class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class StackLL {
  constructor(value) {
    this.head = { value: value, next: null };
    this.tail = this.head;
    this.length = 1;
  }

  add(value) {
    let temp;
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = this.tail = value;
    } else {
      temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }
    this.length++;
    return this;
  }

  remove() {
    let temp;
    if (this.head === null) {
      return null;
    } else {
      temp = this.head;
      this.head = this.head.next;
      
    }
    this.length--;
    return temp.value;
  }
}

const S = new StackLL();
S.add(21);
S.add(22);
S.add(28);
S.add(3);
console.log(S);
console.log(S.remove());
console.log(S);
