/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        return this.valid(root, -Infinity, Infinity);
    }

    /**
     * @param {TreeNode} node
     * @param {number} left
     * @param {number} right
     */
    valid(node, min, max) {
        if(!node){
            return true
        }
        if(!(node.val > min && node.val < max)){
            return false
        }
        return(this.valid(node.left, min, node.val) && this.valid(node.right, node.val, max))
    }
       
}