class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(givenArr, target) {
        let hashedData = new Map()
    for(let index=0; index< givenArr.length ; index++){
         const secondNumber = target - givenArr[index]
          if(hashedData.has(secondNumber)){
           return [hashedData.get(secondNumber), index]
        }
          hashedData.set(givenArr[index], index)
    }
    }
        
}
