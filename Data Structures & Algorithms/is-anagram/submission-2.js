class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */


   isAnagram(firstString, seondString) {
        if (firstString.length !== seondString.length) {
            return false;
        }

        let firstStringCount = new Map()
        let secondStringCount = new Map()

        for(let index= 0; index< firstString.length; index++){
            let firstStringChar = firstString[index];
            let secondStringChar = seondString[index];
            firstStringCount[firstStringChar]= ( firstStringCount[firstStringChar]||0) +1
            secondStringCount[secondStringChar]= ( secondStringCount[secondStringChar]||0) +1
        }

        for(let char in firstStringCount){
            if(firstStringCount[char] !== secondStringCount[char]) return false
        }
        return true
   }
}
