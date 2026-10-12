class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
      nums.sort((firstNumber, secondNumber) => secondNumber- firstNumber)
 
      for(let firstIndex =0; firstIndex < nums.length; firstIndex++){
        if(nums[firstIndex] === nums[firstIndex+1]){
            return true
        }
      }
      return false
    }
}
