/**
 * Description: http://poj.org/problem?id=1363
 * solution: 维护一个队列和一个栈
 */

function legal(list) {
  let stack = [];
  for(let i=1; i<=list.length; i++) {
    stack.push(i);
    while(stack.length !== 0 && list[0] === stack[stack.length -1]) {
      list.shift();
      stack.pop();
    }
  }
  if(stack.length !== 0) {
    return 'No';
  }
  return 'Yes';
}

console.log(legal([5,4,3,2,1]))
