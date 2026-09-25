class Solution {
    numRescueBoats(people: number[], limit: number): number {
        let count = 0;
        people.sort((a, b) => a - b);
        let l = 0;
        let r = people.length - 1;
        while (l <= r) {
            if (people[l] + people[r] <= limit) {
                l++;
            }
            r--;
            count++;
        }
        return count;
    }
}
