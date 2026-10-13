class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let totalRow = grid.length;
        let totalColumn = grid[0].length;
        let island = 0
        const directions=[
            [1,0],
            [0,1],
            [-1,0],
            [0,-1]
        ]

        const dfs = (row, column) => {
            if(row < 0 || column < 0 || row >= totalRow ||
            column >= totalColumn ||
             grid[row] [column] !=='1'){
                return 
            }

            grid[row][column] = '2'
            for(const [directionRow, directionColumn] of directions){
                dfs(row + directionRow, column + directionColumn)
                

            }


        }

        for(let row = 0; row < totalRow; row++){
            for(let column = 0; column < totalColumn; column++){
                if(grid[row][column] === '1'){
                    dfs(row, column)
                    island++
                }
            }
        }
        return island
    }
}
