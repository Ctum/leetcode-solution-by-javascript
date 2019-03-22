/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists1 = function(lists) {
  let len = lists.length;
  let arr = [];
  for(let i=0; i< len; i++) {
    while(lists[i]) {
      arr.push(lists[i]);
      lists[i] = lists[i].next;
    }
  }
  arr.sort((a, b) => a.val - b.val);
  for(let i=0; i< arr.length; i++) {
    if(i < arr.length - 1)arr[i].next = arr[i+1];
    if(i === arr.length -1) arr[i].next = null;
  }
  return arr[0] === undefined ? null : arr[0];
};

var mergeTwoLists = function(l1, l2) {
  let temp = new ListNode(0);
  let res = temp;
  while(l1 && l2) {
    if(l1.val<l2.val) {
      temp.next = l1;
      temp = temp.next;
      l1=l1.next;
    }else{
      temp.next = l2;
      temp = temp.next;
      l2 = l2.next;
    }
  }
  if(l1) {
    temp.next = l1;
  }
  if(l2) {
    temp.next = l2;
  }
  return res.next;
};

var mergeKLists2 = function(lists) {
  let len = lists.length;
  if(len === 0) return null;
  if(len === 1) return lists[0];
  if(len === 2) mergeTwoLists(lists[0], lists[1]);
  let mid = Math.floor(len / 2);
  let l1 = lists.slice(0, mid);
  let l2 = list.slice(mid);
  return mergeTwoLists(mergeKLists2(l1), mergeKLists2(l2));
}
