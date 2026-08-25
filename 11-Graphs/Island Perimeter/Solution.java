class Solution {
    class Solution1 {
        public int islandPerimeter(int[][] grid){
            int perimeter = 0;
            int n = grid.length, m = grid[0].length;
            for(int r = 0; r < n; r++){
                for(int c = 0; c < m; c++){
                    if(grid[r][c] == 0) continue;
                    if(r - 1 < 0 || grid[r-1][c] == 0){
                        perimeter++;
                    }
                    if(r + 1 == n || grid[r+1][c] == 0){
                        perimeter++;
                    }
                    if(c - 1 < 0 || grid[r][c-1] == 0){
                        perimeter++;
                    }
                    if(c + 1 == m || grid[r][c+1] == 0){
                        perimeter++;
                    }
                }
            }
            return perimeter;
        }
    }

    class Solution2 {
        public int islandPerimeter(int[][] grid){
            int n = grid.length, m = grid[0].length;
            for(int r = 0; r < n; r++){
                for(int c = 0; c < m; c++){
                    if(grid[r][c] == 1){
                        return dfs(grid, r, c);
                    }
                }
            }
            return 0;
        }

        private int dfs(int[][]grid, int r, int c){
            if(r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] == 0){
                return 1;
            }
            if(grid[r][c]==-1){
                return 0;
            }
            int count = 0;
            grid[r][c] = -1;
            count += dfs(grid, r-1, c);
            count += dfs(grid, r+1, c);
            count += dfs(grid, r, c-1);
            count += dfs(grid, r, c+1);
            return count;
        }
    }
}