/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 最小堆的元素个数
function heap(k) {
  this.arr = [];

  this.filterDown = function() {
    if(this.arr.length >= 2) {
      
    }
  }

  this.push = function (val) {
    
  }
}
// 堆排序应该更好一点，暂时先空着
var findKthLargest = function(nums, k) {
  nums = nums.sort((a,b) => (b-a));
  return nums[k-1];
};
