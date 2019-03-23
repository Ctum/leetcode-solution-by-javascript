/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.data = [];
    this.Min = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.data.push(x);
    if(this.Min.length === 0) this.Min.push(x);
    else {
      if(x < this.Min[this.Min.length -1]) {
        this.Min.push(x);
      } else {
        this.Min.push(this.Min[this.Min.length -1]);
      }
    }
};

/**
 * @return {void}
 */ 
MinStack.prototype.pop = function() {
    this.data.pop();
    this.Min.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.data[this.data.length -1 ];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.Min[this.Min.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
