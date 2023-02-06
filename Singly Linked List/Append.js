class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class linkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        if (this.head == null) {
          this.head = newNode;
        } else {
          this.tail.next = newNode;
          this.tail = newNode;
          this.length++;
        }
        return this;
      }
      print() {
        let arr = [];
        let currentNode = this.head;
        while (currentNode !== null) {
          arr.push(currentNode.value);
          currentNode = currentNode.next;
        }
        return arr.join(" - ");
      }
    }
let l1 = new linkedList(10);
l1.append(20);
l1.append(30);
l1.append(40);
l1.append(50);
l1.append(60);
l1.append(70).append(80).append(90).append(100);
console.log(l1.print());


