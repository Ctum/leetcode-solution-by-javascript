/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let lessHead = null, less_ptr = null, moreHead = null, more_ptr = null;
  while(head) {
    if(head.val <x) {
      if(lessHead===null) {
        lessHead = head;
      }
      if (less_ptr === null) {
        less_ptr = head;
      } else {
        less_ptr.next = head;
        less_ptr = head;
      }
    } else {
      if(moreHead === null) {
        moreHead = head;
      }
      if(more_ptr === null) {
        more_ptr = head;
      } else {
        more_ptr.next = head;
        more_ptr = head;
      }
    }
    head = head.next;
  }
  if(less_ptr!==null) {
    less_ptr.next = moreHead;
  } else {
    if(more_ptr!==null) {
      more_ptr.next = null;
    }
    return moreHead;
  }
  if (more_ptr) more_ptr.next = null;
  return lessHead;
};