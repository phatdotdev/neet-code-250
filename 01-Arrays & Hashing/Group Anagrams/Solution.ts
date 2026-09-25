class Solution1 {
    groupAnagrams(strs: string[]): string[][] {
        const res: string[][] = [];
        const map = new Map();

        function getKey(str: string) {
            return str.split("").sort().join("");
        }

        for (const str of strs) {
            const key = getKey(str);
            if (!map.has(key)) {
                map.set(key, [str]);
            } else {
                map.get(key).push(str);
            }
        }
        for (const list of map.values()) {
            res.push(list);
        }
        return res;
    }
}

class Solution2 {
    groupAnagrams(strs: string[]): string[][] {
        const res: string[][] = [];

        function getKey(str: string): string {
            const count: number[] = new Array(26).fill(0);
            for (const ch of str) {
                count[ch.charCodeAt(0) - 97]++;
            }
            return count.join("#");
        }

        const map: Map<string, string[]> = new Map<string, string[]>();

        for (const str of strs) {
            const key = getKey(str);
            if (!map.has(key)) {
                map.set(key, []);
            }
            map.get(key)?.push(str);
        }

        return Array.from(map.values());
    }
}
