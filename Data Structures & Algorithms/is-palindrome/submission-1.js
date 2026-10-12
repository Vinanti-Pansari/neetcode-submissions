class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

   isCharAlphaNumeric(char){
    if(char >= 'a' && char <= 'z' ||
    char >= 'A' && char <= 'Z' ||
    char >= '0' && char <= '9' 
    ){
        return true
    }
    return false
   }

    isPalindrome(string) {
       let newString = ''
       for(const char of string){
        if(this.isCharAlphaNumeric(char)){
          newString += char.toLowerCase() 
        }
    
       }
       let reeverString = [...newString].reverse().join('')
        return newString === reeverString
       
    }
}
