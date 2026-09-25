import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.PriorityQueue;
import java.util.Set;

class Solution {

    class Twitter {
        private static int timestamp = 0;

        class Tweet {
            int id;
            int time;

            Tweet(int id, int time) {
                this.id = id;
                this.time = time;
            }
        }

        Map<Integer, Set<Integer>> followees;
        Map<Integer, List<Tweet>> posts;

        Twitter() {
            followees = new HashMap<>();
            posts = new HashMap<>();
        }

        public void postTweet(int userId, int tweetId) {
            posts.computeIfAbsent(userId, (k) -> new ArrayList<>()).add(new Tweet(tweetId, timestamp++));
        }

        public List<Integer> getNewsFeed(int userId) {
            PriorityQueue<Tweet> pq = new PriorityQueue<>((a, b) -> a.time - b.time);
            Set<Integer> userFollowees = new HashSet<>(followees.getOrDefault(userId, new HashSet<>()));
            userFollowees.add(userId);

            for (int followeeId : userFollowees) {
                List<Tweet> tweetList = posts.getOrDefault(followeeId, Collections.emptyList());
                int start = Math.max(0, tweetList.size() - 10);
                for (int i = start; i < tweetList.size(); i++) {
                    pq.offer(tweetList.get(i));
                    if (pq.size() > 10) {
                        pq.poll();
                    }
                }
            }

            List<Integer> res = new LinkedList<>();
            while (!pq.isEmpty()) {
                res.addFirst(pq.poll().id);
            }
            return res;
        }

        public void follow(int followerId, int followeeId) {
            followees.computeIfAbsent(followerId, (k) -> new HashSet<>()).add(followeeId);
        }

        public void unfollow(int followerId, int followeeId) {
            if (followees.containsKey(followerId)) {
                followees.get(followerId).remove(followeeId);
            }
        }
    }

}