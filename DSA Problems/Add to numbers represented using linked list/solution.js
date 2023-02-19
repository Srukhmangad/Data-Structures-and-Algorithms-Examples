//Function to add linked lists number in reverse order
function addLinkedListsReveseOrder(l1, l2) {
    let carry = 0;
    let sum = null;
    let current = null;
    
    while (l1 || l2) {
      let val1 = l1 ? l1.val : 0;
      let val2 = l2 ? l2.val : 0;
      let digitSum = val1 + val2 + carry;
      carry = digitSum >= 10 ? 1 : 0;
      digitSum = digitSum % 10;
      
      if (!sum) {
        sum = new ListNode(digitSum);
        current = sum;
      } else {
        current.next = new ListNode(digitSum);
        current = current.next;
      }
      
      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;
    }
    
    if (carry) {
      current.next = new ListNode(carry);
    }
    
    return sum;
  }
  
  class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  // function to add linked list in forward order
  function addLinkedListsForwardOrder(l1, l2) {
    let carry = 0;
    let dummyHead = new ListNode(0);
    let curr = dummyHead;
    
    while (l1 && l2) {
      let sum = l1.val + l2.val + carry;
      carry = Math.floor(sum / 10);
      curr.next = new ListNode(sum % 10);
      curr = curr.next;
      l1 = l1.next;
      l2 = l2.next;
    }
    
    let remaining = l1 || l2;
    
    while (remaining) {
      let sum = remaining.val + carry;
      carry = Math.floor(sum / 10);
      curr.next = new ListNode(sum % 10);
      curr = curr.next;
      remaining = remaining.next;
    }
    
    carry > 0 ? curr.next = new ListNode(carry) : null;
    
    return dummyHead.next;
  }
  
  //function to take linkedlist input as an array
  function linkedList(arr) {
    if (!arr || arr.length === 0) return null;
  
    let head = new ListNode(arr[0]);
    let currentNode = head;
  
    for (let i = 1; i < arr.length; i++) {
      const node = new ListNode(arr[i]);
      
      currentNode.next = node;
      currentNode = node;
    }
  
    return head;
  }
  arr1 = [7,1,6];
  arr2 = [5,9,2];
  const list1 =linkedList(arr1);
  const list2 =linkedList(arr2);

  //console.log(addLinkedListsReveseOrder(list1, list2));
  console.log(addLinkedListsForwardOrder(list1, list2));



