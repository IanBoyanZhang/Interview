/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var result = [];
  var array = nums.sort(function(a, b) {
    return a - b;
  })

  var len = array.length;
  // console.log(array);
  for ( var i = 0; i < len; i++ ) {
    if (array[i] > 0) {
      break;
    }

    for ( var j = len - 1; j > i ; j--) {
      if ( array[j] < 0 ) {
        break;
      }

      for ( var k = j - 1; k > i; k-- ) {
        if ((array[i] + array[j] + array[k]) === 0) {
          result.push([array[i], array[j], array[k]]);
        }
      }
    }
  }

  return result;
};

var arr = [-1, 0, 1, 2, -1, -4];
var arr = [0, 0, 0];
// threeSum(arr);
console.log(threeSum(arr));
// console.log(threeSum([1]));
// console.log(threeSum([1, -1]));
// console.log(threeSum([0, 0, 0]));