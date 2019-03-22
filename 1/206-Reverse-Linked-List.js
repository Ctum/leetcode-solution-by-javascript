/**
 * Reverse a singly linked list.
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let newHead;
  let temp;
  while(head) {
    temp = head;
    head = head.next;
    temp.next = newHead;
    newHead = temp;
  }
  return newHead
};