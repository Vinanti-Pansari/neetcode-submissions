class Solution {
    topKFrequent(nums, k) {
     const frequentNumMap = new Map();

     for(const number of nums){
        frequentNumMap.set(number, (frequentNumMap.get(number)|| 0) + 1)
     }
     // 1=> 1, 2=>2, 3 => 3
     
     const bucket = Array.from({length: nums.length+1}, ()=> [])
     // => [[],[],[],[],[],[], []]

    for( const [number, frequency] of frequentNumMap){
        bucket[frequency].push(number) 
    }
//[[], [1],[2],[3], [], [], []]
 let resultArr=[]


for(let index=bucket.length-1; index >=0; index--){
   for(let flatNumber of bucket[index]) {
if(resultArr.length < k){
       resultArr.push(flatNumber)
    }
   }
    
}
return resultArr

    }
}
