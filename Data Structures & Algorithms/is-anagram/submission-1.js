class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */



   getSortedString(string){
     return [...string].sort().join()
   
    }

    isAnagram(firstString, secondString) {
    return this.getSortedString(firstString) === this.getSortedString(secondString)
    }
}
