class Node {
    constructor(student) {
      this.student = student;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(student) {
      const node = new Node(student);
      if (this.root === null) {
        this.root = node;
        return;
      }
      this._insertNode(this.root, node);
    }
  
    _insertNode(root, node) {
      if (node.student.percentage < root.student.percentage) {
        if (root.left === null) {
          root.left = node;
        } else {
          this._insertNode(root.left, node);
        }
      } else {
        if (root.right === null) {
          root.right = node;
        } else {
          this._insertNode(root.right, node);
        }
      }
    }
  
    find(studentName) {
      return this._findNode(this.root, studentName);
    }
  
    _findNode(node, studentName) {
      if (node === null) {
        return null;
      } else if (node.student.name === studentName) {
        return node.student;
      } else if (studentName < node.student.name) {
        return this._findNode(node.left, studentName);
      } else {
        return this._findNode(node.right, studentName);
      }
    }
  }
  
  class Student {
    constructor(id, name, marks) {
      this.id = id;
      this.name = name;
      this.marks = marks;
      this.totalMarks = marks.reduce((total, mark) => total + mark, 0);
      this.percentage = (this.totalMarks / 500) * 100;
    }
  }
  
  const tree = new BinaryTree();
  

  const id = prompt('Enter student id:');
  const name = prompt('Enter student name:');

  const marks = [];
  for (let i = 1; i <= 5; i++) {
    const mark = Number(prompt(`Enter mark ${i}:`));
    marks.push(mark);
  }
  const student = new Student(id, name, marks);
  
 
  tree.insert(student);
  

  const searchName = prompt('Enter student name to search:');
  const searchedStudent = tree.find(searchName);
  if (searchedStudent !== null) {
    console.log(`Student ID: ${searchedStudent.id}`);
    console.log(`Student Name: ${searchedStudent.name}`);
    console.log(`Student Marks: ${searchedStudent.marks.join(', ')}`);
  } else {
    console.log('Student not found.');
  }
  