class NumMatrix {
    private prefix: number[][];
    constructor(matrix: number[][]) {
        const n = matrix.length;
        const m = matrix[0].length;

        this.prefix = Array.from({ length: n + 1 }, () =>
            new Array(m + 1).fill(0),
        );

        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= m; j++) {
                this.prefix[i][j] =
                    matrix[i - 1][j - 1] +
                    this.prefix[i - 1][j] +
                    this.prefix[i][j - 1] -
                    this.prefix[i - 1][j - 1];
            }
        }
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        return (
            this.prefix[row2 + 1][col2 + 1] -
            this.prefix[row1][col2 + 1] -
            this.prefix[row2 + 1][col1] +
            this.prefix[row1][col1]
        );
    }
}
