/**
 * initialize your data structure here.
 * 想先水过去，发现最后一个test通不过， 还是要用堆啊
 */
var MedianFinder = function() {
  this.data = []
};

/** 
* @param {number} num
* @return {void}
*/
MedianFinder.prototype.addNum = function(num) {
  this.data.push(num);
  this.data.sort((a, b) => (a-b));
};

/**
* @return {number}
*/
MedianFinder.prototype.findMedian = function() {
  let len = this.data.length;
  if(len % 2 !== 0) {
      return this.data[Math.floor(len/2)];
  } else {
      let half = len / 2;
      return (this.data[half-1] + this.data[half]) / 2;
  }
};

/** 
* Your MedianFinder object will be instantiated and called as such:
* var obj = Object.create(MedianFinder).createNew()
* obj.addNum(num)
* var param_2 = obj.findMedian()
*/
