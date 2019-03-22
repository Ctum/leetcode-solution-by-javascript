/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */

function Node(val,next,random) {
  this.val = val;
  this.next = next;
  this.random = random;
};

var copyRandomList = function(head) {
  if(!head) return null;
  let new_head = new Node(head.val, null, null);
  let old_head = head;
  let res = new_head;
  // 原链表 地址到位置的map;
  let addr_id = new Map();
  // 新链表 位置到地址的map;
  let id_addr = new Map();
  let i=0;
  while(head) {
    addr_id.set(head, i);
    if(head.next) new_head.next = new Node(head.next.val, null, null);
    id_addr.set(i, new_head);
    new_head = new_head.next;
    head = head.next;
    i++;
  }
  head = old_head;
  new_head = res;
  while(head) {
    new_head.random = id_addr.get(addr_id.get(head.random)) === undefined ? null : id_addr.get(addr_id.get(head.random));
    head = head.next;
    new_head = new_head.next;
  }
  return res;
};

let res = copyRandomList({"$id":"1","next":null,"random":null,"val":-1})

console.log(res)