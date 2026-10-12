
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
      if(!root) return []

    let result = []
    let queue = [root]
    
     
      while(queue.length){
        let level = []
        const levelSize = queue.length
        for(let index=0; index < levelSize; index++ ){
            let currentNode = queue.shift()
            level.push(currentNode.val)

            if(currentNode.left){
             queue.push(currentNode.left)
            }
            if(currentNode.right){
                 queue.push(currentNode.right)
            }
           
        }
        result.push(level)
      }
        return result
    }
    
}