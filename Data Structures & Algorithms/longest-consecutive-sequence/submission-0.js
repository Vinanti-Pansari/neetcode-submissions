class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const mappedNumbers = new Set(nums)
        let longest = 0

        for(const num of mappedNumbers){
            if(!mappedNumbers.has(num-1)){
            let length = 1
            while(mappedNumbers.has(num+length)){
                length ++
            }
            longest = Math.max(length, longest)

            }

        }
      return longest
    }
}
