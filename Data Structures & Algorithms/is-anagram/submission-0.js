class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */



   getSortedString(string){
     const sortedStringArr= [...string].sort()
     let sortedString = ''
     for(let index =0; index < sortedStringArr.length; index++){
      sortedString += sortedStringArr[index]
     }
      return sortedString
    }

    isAnagram(firstString, secondString) {
      if(this.getSortedString(firstString) === this.getSortedString(secondString)){
        return true
      }else{
        return false
      }
    }
}
