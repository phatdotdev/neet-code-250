/// <reference no-default-lib="true" />
/// <reference lib="es2015" />

class Node {
    val: number;
    neighbors: Node[];
    constructor(val = 0, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

class Solution {
    cloneGraph(node: Node | null): Node {
        if (node === null) return node!;
        const map: Map<Node, Node> = new Map<Node, Node>();
        function clone(node: Node): Node {
            if (node === null) return node!;
            if (map.has(node)) {
                return map.get(node)!;
            } else {
                const newNode = new Node(node.val);
                map.set(node, newNode);
                for (const neighbor of node.neighbors) {
                    newNode.neighbors.push(clone(neighbor));
                }
                return newNode;
            }
        }
        return clone(node)!;
    }
}
