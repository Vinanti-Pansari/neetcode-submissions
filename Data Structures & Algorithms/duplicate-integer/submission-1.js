class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
         let isSameNumberAvailable = false
        for (let firstIndex =0; firstIndex < nums.length; firstIndex++) {
           const currentNumber = nums[firstIndex]
          const isNumberAvailable = nums.findIndex((number, index)=>{
            return number === currentNumber && firstIndex !== index
          })
          isSameNumberAvailable =isNumberAvailable > 0 ? true : false
          if(isSameNumberAvailable){
            return true
          }
  
        }
return isSameNumberAvailable

    }
}
