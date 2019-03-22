/**
 * Reverse a linked list from position m to n. Do it in one-pass.
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  let changeLen = n -m + 1;
  let pre = null;
  // 非特殊情况(m==1) result = head
  let result = head;
  while(head && --m) {
    pre = head;
    head = head.next;
  }
  // 逆置后的尾部
  let modify_list_tail = head;
  let new_head = null;
  while(head && changeLen) {
    let next = head.next;
    head.next = new_head;
    new_head = head;
    head = next;
    changeLen --;
  }
  modify_list_tail.next = head;
  if(pre) {
    pre.next = new_head;
  } else {
    result = new_head;
  }
  return result;
};
