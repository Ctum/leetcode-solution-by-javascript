/**
 * @param {string} s
 * @return {number}
 * 
 */
var calculate = function(s) {
  let numberStack = [], operationStack = [];
  let num=0, rst = 0, sign=1, i=0;
  while(i<s.length) {
    if(!isNaN(s[i])) {
      if(s[i]!=' ') {
        num = num * 10 + Number(s[i]);
      }
    } else {
      rst += sign * num;
      num=0;
      if(s[i] === '+') sign = 1;
      if(s[i] === '-') sign = -1;
      if(s[i] === '(') {
        numberStack.push(rst);
        operationStack.push(sign);
        rst=0;
        sign=1;
      }
      if(s[i] === ')' && operationStack.length !== 0) {
        rst = operationStack.pop() * rst + numberStack.pop();
      }
    }
    i++;
  }
  rst += sign * num;
  return rst;
}

console.log(calculate('(1 + 2 - 9)'))
