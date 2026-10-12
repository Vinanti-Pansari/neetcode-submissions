class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let isNumberRedundent = false
        for (let firstIndex = 0; firstIndex< nums.length; firstIndex++){
            let currentNumber = nums[firstIndex]
          const duplicateNumberIndex = nums.findIndex((number, index) => 
             number === currentNumber && firstIndex != index
          ) // -1 or index
             isNumberRedundent = duplicateNumberIndex > -1 ? true : false
             if(isNumberRedundent) return true
        }
      return isNumberRedundent

    }
}
