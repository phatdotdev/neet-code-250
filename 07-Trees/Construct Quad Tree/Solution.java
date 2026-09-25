
class Solution {
    class Node {
        public boolean val;
        public boolean isLeaf;
        public Node topLeft;
        public Node topRight;
        public Node bottomLeft;
        public Node bottomRight;

        public Node() {
            this.val = false;
            this.isLeaf = false;
            this.topLeft = null;
            this.topRight = null;
            this.bottomLeft = null;
            this.bottomRight = null;
        }

        public Node(boolean val, boolean isLeaf) {
            this.val = val;
            this.isLeaf = isLeaf;
            this.topLeft = null;
            this.topRight = null;
            this.bottomLeft = null;
            this.bottomRight = null;
        }

        public Node(boolean val, boolean isLeaf, Node topLeft, Node topRight, Node bottomLeft, Node bottomRight) {
            this.val = val;
            this.isLeaf = isLeaf;
            this.topLeft = topLeft;
            this.topRight = topRight;
            this.bottomLeft = bottomLeft;
            this.bottomRight = bottomRight;
        }
    }

    public Node construct(int[][] grid) {
        return dfs(grid, 0, 0, grid.length);
    }

    private Node dfs(int[][] grid, int i, int j, int size) {
        if (size == 1) {
            return new Node(grid[i][j] == 1, true);
        }
        int half = size / 2;
        Node tl = dfs(grid, i, j, half);
        Node tr = dfs(grid, i, j + half, half);
        Node bl = dfs(grid, i + half, j, half);
        Node br = dfs(grid, i + half, j + half, half);
        if (tl.isLeaf && tr.isLeaf && bl.isLeaf && br.isLeaf &&
                tl.val == tr.val && tr.val == bl.val && bl.val == br.val) {
            return new Node(tl.val, true);
        }
        return new Node(false, false, tl, tr, bl, br);
    }
}
