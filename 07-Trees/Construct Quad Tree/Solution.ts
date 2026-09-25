/// <reference no-default-lib="true"/>
/// <reference lib="es2015" />

class Node {
    val: boolean;
    isLeaf: boolean;
    topLeft: Node | null;
    topRight: Node | null;
    bottomLeft: Node | null;
    bottomRight: Node | null;

    constructor(
        val: boolean = false,
        isLeaf: boolean = false,
        topLeft: Node | null = null,
        topRight: Node | null = null,
        bottomLeft: Node | null = null,
        bottomRight: Node | null = null,
    ) {
        this.val = val;
        this.isLeaf = isLeaf;
        this.topLeft = topLeft;
        this.topRight = topRight;
        this.bottomLeft = bottomLeft;
        this.bottomRight = bottomRight;
    }
}

class Solution {
    construct(grid: number[][]): Node {
        function make(grid: number[][], i: number, j: number, n: number): Node {
            let allSame = true;
            const cand = grid[i][j];
            for (let x = i; x < i + n; x++) {
                for (let y = j; y < j + n; y++) {
                    if (grid[x][y] !== cand) {
                        allSame = false;
                        break;
                    }
                }
            }
            if (allSame) {
                return new Node(cand === 1, true);
            } else {
                return new Node(
                    false,
                    false,
                    make(grid, i, j, n / 2),
                    make(grid, i, j + n / 2, n / 2),
                    make(grid, i + n / 2, j, n / 2),
                    make(grid, i + n / 2, j + n / 2, n / 2),
                );
            }
        }

        return make(grid, 0, 0, grid.length);
    }
}
