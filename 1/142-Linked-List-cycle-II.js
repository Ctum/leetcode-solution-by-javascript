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
var detectCycle = function(head) {
  let head1 = head;
  let head2 = head;
  let meet = null;
  while(head1 && head2 && head2.next) {
      head1 = head1.next;
      head2 = head2.next.next;
      if(head1 === head2) {
          meet = head1;
          break;
      }
  }
  if(meet === null) {
    return null;
  }
  while(head && meet) {
    if(head === meet) {
      return head;
    }
    head = head.next;
    meet = meet.next;
  }
};