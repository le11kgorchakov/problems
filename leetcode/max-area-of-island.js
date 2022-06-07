/**
 * @param {number[][]} grid
 * @return {number}
 * Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.
 */
const fill = (grid, i, j) => {
    const island = 1
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] !== island) {
        return
    }
    grid

}


var maxAreaOfIsland = function (grid) {

};