class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
      const uniqueArray = [...new Set(nums)];
      if(nums.length >uniqueArray.length ){
        return true
      }
      else{
        return false
      }
 }
}
