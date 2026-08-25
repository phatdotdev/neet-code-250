class Solution {
  isAlienSoted(words: string[], order: string): boolean {
    const rank: number[] = new Array(26);
    for (let i = 0; i < 26; i++) {
      rank[order.charCodeAt(i) - "a".charCodeAt(0)] = i;
    }
    for (let i = 1; i < words.length; i++) {
      if (!this.compare(words[i - 1], words[i], rank)) {
        return false;
      }
    }
    return true;
  }

  compare(a: string, b: string, rank: number[]): boolean {
    const len = Math.min(a.length, b.length);
    for (let i = 0; i < len; i++) {
      const rankA = rank[a.charCodeAt(i) - "a".charCodeAt(0)];
      const rankB = rank[b.charCodeAt(i) - "a".charCodeAt(0)];

      if (rankA > rankB) return false;
      if (rankA < rankB) return true;
    }
    return b.length >= a.length;
  }
}
