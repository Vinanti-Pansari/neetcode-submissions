class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hashNums= new Set()
      for(let num of nums){
        if(hashNums.has(num)){
         return true
       }else{
         hashNums.add(num)
       } 
    }
    return false
 }
}
