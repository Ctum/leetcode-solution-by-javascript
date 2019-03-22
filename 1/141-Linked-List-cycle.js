/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let head1 = head;
  let head2 = head;
  while(head1 && head2 && head2.next) {
      head1 = head1.next;
      head2 = head2.next.next;
      if(head1 === head2) {
          return true;
      }
  }
  return false;
};
