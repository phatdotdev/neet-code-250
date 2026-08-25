class Solution {
  class Solution1 {
    islandPerimeter(grid: number[][]): number {
    const n = grid.length, m = grid[0].length;
    for(let row = 0; row < n; row++){
        for(let col = 0; col < m; col++){
            if(grid[row][col] == 1){
                return this._dfs(grid, row, col);
            }
        }
        }
        return 0;
    }

    _dfs(grid: number[][], row:number, col:number) {
        if(row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] == 0){
            return 1;
        }
        if(grid[row][col] == -1){
            return 0;
        }
        let count = 0;
        grid[row][col] = -1;
        count += this._dfs(grid, row-1, col);
        count += this._dfs(grid, row+1, col);
        count += this._dfs(grid, row, col-1);
        count += this._dfs(grid, row, col+1);
        return count;
    }
  }

  class Solution2 {
    islandPerimeter(grid: number[][]): number{
        let n = grid.length, m = grid[0].length;
        let count = 0;
        for(let row = 0; row < n; row++){
            for(let col = 0; col < m; col++){
                if(grid[row][col] == 0) continue;
                if(row - 1 < 0 || grid[row - 1][col] == 0) count++;
                if(row + 1 >= n || grid[row+1][col] == 0) count++;
                if(col -1 < 0 || grid[row][col - 1] == 0) count++;
                if(col + 1 >= m || grid[row][col + 1] == 0) count++;
            }
        }
        return count;
    }
  }
}
