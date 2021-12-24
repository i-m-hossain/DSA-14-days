/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate1 = function(nums, k) {
//    let array = nums;
//     for (let i = 0; i < k; i++) {
//         let popped = array.pop();
//         array.unshift(popped)
//     }
//     return array;
// };
// var rotate2 = function (nums, k) {
//     for (let i = 0; i < k; i++) {
//         let last = nums[nums.length - 1]
//         for (let j = nums.length - 1; j >= 0; j--) {

//             console.log(nums[j]);
//             nums[j] = nums[j - 1]
//         }
//         nums[0] = last

//     }
//     return nums
// }

// var rotate = function (nums, k) {
//     let temp = []
//     let n = nums.length;
//     for (let i = 0; i < nums.length; i++) {
//         temp[(i + k) % n] = nums[i];
//         if (k > n) {
//             k = k % n;
//         }
//     }
//     return temp;
// }

const revArr = (nums, start, end) => {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]]
        start++;
        end--;
    }
}
var rotate = function (nums, k) {
    k = k % nums.length
    nums.reverse()
    revArr(nums, 0, k - 1)
    revArr(nums, k, nums.length - 1)
    return nums
}
