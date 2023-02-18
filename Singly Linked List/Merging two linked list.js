
  class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function linkedList(arr) {
    if (!arr || arr.length === 0) return null;
  
    let head = new ListNode(arr[0]);
    let currentNode = head;
  
    for (let i = 1; i < arr.length; i++) {
      const node = new ListNode(arr[i]);
      if (node.val < currentNode.val) {
        throw new Error("Array not sorted in ascending order");
      }
      currentNode.next = node;
      currentNode = node;
    }
  
    return head;
  }

  function mergeLinkedLists(list1, list2) {
    let dummyNode = new ListNode(0);
    let tail = dummyNode;
    mergedArr = [];
  
    while (list1 !== null && list2 !== null) {
      if (list1.val < list2.val) {
        tail.next = list1;
        list1 = list1.next;
        mergedArr.push(tail.next);
      } else {
        tail.next = list2;
        list2 = list2.next;
        mergedArr.push(tail.next);
      }
      tail = tail.next;
    }
  
    if (list1 !== null) {
      tail.next = list1;
      mergedArr.push(tail.next);
    } else if (list2 !== null) {
      tail.next = list2;
      mergedArr.push(tail.next);
    }
  
    return console.log(mergedArr);
    //return dummyNode.next;
  }

list1 = linkedList([1, 3, 5]);
list2 = linkedList([2, 4, 6]);
sortedList = mergeLinkedLists(list1, list2);
