class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    //["act","pots","tops","cat","stop","hat"]
    groupAnagrams(strings) {
        let stringCollections = new Map()
        for(let index = 0; index < strings.length; index++){
            //act
            const currentString = [...strings[index]].sort().join()

          if(!stringCollections.has(currentString)){
              stringCollections.set(currentString,[strings[index]])
          }else{
            const arrAgainestKey = stringCollections.get(currentString)
            arrAgainestKey.push(strings[index])
          }

        

          }
          return [...stringCollections.values()]

        }
      
    }


