import java.util.ArrayDeque;
import java.util.Deque;
import java.util.LinkedList;
import java.util.Queue;

class Solution {
    class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode() {
        }

        TreeNode(int val) {
            this.val = val;
        }

        TreeNode(int val, TreeNode left, TreeNode right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }

    public class Codec {
        private int i = 0;

        public String serialize(TreeNode root) {
            StringBuilder res = new StringBuilder();
            dfs(root, res);
            return res.toString();
        }

        private void dfs(TreeNode root, StringBuilder res) {
            if (root == null) {
                res.append('.').append('#');
                return;
            }
            res.append(root.val).append('#');
            dfs(root.left, res);
            dfs(root.right, res);
        }

        public TreeNode deserialize(String data) {
            String[] vals = data.split("#");
            this.i = 0;
            return build(vals);
        }

        private TreeNode build(String[] vals) {
            if (vals[i].equals(".")) {
                this.i++;
                return null;
            }
            TreeNode root = new TreeNode(Integer.parseInt(vals[i]));
            i++;
            root.left = build(vals);
            root.right = build(vals);
            return root;
        }
    }
}

class Solution2 {
    class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode() {
        }

        TreeNode(int val) {
            this.val = val;
        }

        TreeNode(int val, TreeNode left, TreeNode right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }

    public class Codec {

        public String serialize(TreeNode root) {
            if (root == null) {
                return ".#";
            }
            StringBuilder res = new StringBuilder();
            Queue<TreeNode> queue = new LinkedList<>();
            queue.offer(root);
            while (!queue.isEmpty()) {
                TreeNode current = queue.poll();
                if (current == null) {
                    res.append(".#");
                    continue;
                }
                res.append(current.val).append('#');
                queue.offer(current.left);
                queue.offer(current.right);
            }
            return res.toString();
        }

        public TreeNode deserialize(String data) {
            if (data == null || data.isEmpty()) {
                return null;
            }
            String[] strs = data.split("#");

            if (strs[0].equals(".")) {
                return null;
            }

            TreeNode root = new TreeNode(Integer.parseInt(strs[0]));

            Queue<TreeNode> queue = new LinkedList<>();
            queue.offer(root);

            int index = 1;
            while (!queue.isEmpty() && index < strs.length) {
                TreeNode current = queue.poll();
                if (!strs[index].equals(".")) {
                    current.left = new TreeNode(Integer.parseInt(strs[index]));
                    queue.offer(current.left);
                }
                index++;
                if (index < strs.length && !strs[index].equals(".")) {
                    current.right = new TreeNode(Integer.parseInt(strs[index]));
                    queue.offer(current.right);
                }
                index++;
            }

            return root;
        }
    }
}