class Solution {
    simplifyPath(path: string): string {
        const parts: string[] = path.split("/");
        let i = 0;
        const dirs: string[] = [];
        for (const dir of parts) {
            if (dir === "" || dir === ".") {
                continue;
            } else if (dir === "..") {
                if (dirs.length > 0) {
                    dirs.pop();
                }
            } else {
                dirs.push(dir);
            }
        }
        return "/" + dirs.join("/");
    }
}
