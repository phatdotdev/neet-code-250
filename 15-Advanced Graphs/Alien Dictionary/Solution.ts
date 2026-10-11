class Solution {
    foreignDictionary(words: string[]): string {
        const n: number = words.length;
        const graph: Map<string, Set<string>> = new Map();
        const indegree: Map<string, number> = new Map();

        for (const word of words) {
            for (const char of word) {
                if (!graph.has(char)) {
                    graph.set(char, new Set());
                    indegree.set(char, 0);
                }
            }
        }

        for (let i = 0; i < n - 1; i++) {
            const word1: string = words[i];
            const word2: string = words[i + 1];
            const minLen: number = Math.min(word1.length, word2.length);
            let foundDifference = false;
            for (let j = 0; j < minLen; j++) {
                const char1 = word1[j];
                const char2 = word2[j];
                if (char1 !== char2) {
                    if (!graph.get(char1)!.has(char2)) {
                        graph.get(char1)!.add(char2);
                        indegree.set(char2, indegree.get(char2)! + 1);
                    }
                    foundDifference = true;
                    break;
                }
            }
            if (!foundDifference && word1.length > word2.length) {
                return "";
            }
        }

        const queue: string[] = [];
        const res: string[] = [];
        for (const [char, degree] of indegree) {
            if (degree === 0) {
                queue.push(char);
            }
        }

        while (queue.length > 0) {
            const char = queue.shift()!;
            res.push(char);
            for (const neighbor of graph.get(char)!) {
                indegree.set(neighbor, indegree.get(neighbor)! - 1);
                if (indegree.get(neighbor) === 0) {
                    queue.push(neighbor);
                }
            }
        }

        if (res.length != graph.size) {
            return "";
        }

        return res.join("");
    }
}
