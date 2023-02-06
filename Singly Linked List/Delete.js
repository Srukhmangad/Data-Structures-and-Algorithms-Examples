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
      deleteTail() {
        let currentNode = this.head;
        while (currentNode.next.next !== null) {
          currentNode = currentNode.next;
        }
        currentNode.next = null;
        this.tail = currentNode;
        this.length--;
      }
      deleteHead() {
        this.head = this.head.next;
        this.length--;
      }
    
      deleteNode(index) {
        let count = 1;
        let currentNode = this.head;
        if((index-1)===0) {
            if(currentNode!==null)
            {
                this.deleteHead()
            }
            else
                throw Error("Index Out of Bound");
    
            return;
        }
        
        else{while (count < index-1) {
        if(currentNode.next!=null){
          currentNode = currentNode.next;
          count++;
        }
        else{
            throw Error("Index Out of Bound");
        }
        }
        currentNode.next = currentNode.next.next;
    
        this.length--;
        return this;
      }
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
l1.deleteHead();
console.log(l1.print());
l1.deleteTail();
console.log(l1.print());
l1.deleteNode(1);
console.log(l1.print());
l1.deleteNode(5);
console.log(l1.print());
l1.deleteNode(6);
console.log(l1.print());


