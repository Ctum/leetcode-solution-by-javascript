/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  while(headA) {
    let headBCopy = headB;
    while(headA!=headBCopy && headBCopy) {
      headBCopy = headBCopy.next;
    }
    if(headBCopy === headA) {
      return headA;
    }
    headA = headA.next;
  }
};

function getLen(head) {
  let len=0;
  while(head) {
    len++
    head = head.next;
  }
  return len;
}
getIntersectionNode1 = function(headA, headB) {
  let lenA = getLen(headA);
  let lenB = getLen(headB);
  while(lenA > lenB) {
    headA = headA.next;
    lenA = getLen(headA);
  }
  while(lenB > lenA) {
    headB = headB.next;
    lenB = getLen(headB);
  }
  while(headA && headB) {
    if(headA === headB) {
      return headB
    }
    headA = headA.next;
    headB = headB.next;
  }
  return null;
}
