class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function linkedListInput(arr) {
  if (!arr.length) {
    return null;
  }

  const head = new ListNode(arr[0]);
  let curr = head;

  for (let i = 1; i < arr.length; i++) {
    const node = new ListNode(arr[i]);
    curr.next = node;
    curr = node;
  }

  return head;
}

function reverseLinkedList(head) {
  let prev = null;
  let curr = head;
  let next = null;
  
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  
  return prev;
}


const arr = [1,2,3,4,5,6]
const head = linkedListInput(arr);
const reverseHead = reverseLinkedList(head);

let currentNode = reverseHead;
while (currentNode) {
  console.log(currentNode.val);
  currentNode = currentNode.next;
}
