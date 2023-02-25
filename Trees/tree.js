class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (this.root !== null) {
        if (value > currentNode.value) {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            break;
          } else {
            currentNode = currentNode.right;
          }
        } else if (value < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            break;
          } else {
            currentNode = currentNode.left;
          }
        }
      }
    }
  }
  inorderArr = [];

  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      this.inorderArr.push(node.value);
      // console.log(node.value);
      this.inorder(node.right);
    }
  }

  preorder(node) {
    if (node !== null) {
      console.log(node.value);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }
  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.value);
    }
  }

  display() {
    let a = [];
  }

  traversal(p) {
    let inorder = (node) => {
      if (node.left !== null) {
        inorder(node.left);
      }
      inorder(this.root);
      if (node.right !== null) {
        inorder(node.right);
      }
    };
  }
}


const t = new BST();

t.insert(100);
t.insert(60);
t.insert(30);
t.insert(150);
t.insert(400);
t.insert(200);
t.inorder(t.root);
console.log("inorder", t.inorderArr);

let n = 4;
console.log(t.inorderArr[t.inorderArr.length-n]);

// console.log(t.display());

