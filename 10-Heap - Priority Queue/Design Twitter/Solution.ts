class Tweet {
    userId: number;
    tweetId: number;

    constructor(userId: number, tweetId: number) {
        this.userId = userId;
        this.tweetId = tweetId;
    }
}

class Twitter {
    private tweets: Tweet[];
    private followees: Map<number, Set<number>>;

    constructor() {
        this.tweets = [];
        this.followees = new Map();
    }

    postTweet(userId: number, tweetId: number): void {
        this.tweets.push(new Tweet(userId, tweetId));
    }
    getNewsFeed(userId: number): number[] {
        const followees = this.followees.has(userId)
            ? new Set(this.followees.get(userId))
            : new Set();
        followees.add(userId);

        let i = this.tweets.length - 1;
        const feed: number[] = [];
        let count = 0;
        while (i >= 0 && count < 10) {
            if (followees.has(this.tweets[i].userId)) {
                feed.push(this.tweets[i].tweetId);
                count++;
            }
            i--;
        }
        return feed;
    }

    follow(followerId: number, followeeId: number): void {
        if (!this.followees.has(followerId)) {
            this.followees.set(followerId, new Set());
        }
        this.followees.get(followerId)!.add(followeeId);
    }

    unfollow(followerId: number, followeeId: number): void {
        if (this.followees.has(followerId)) {
            this.followees.get(followerId)!.delete(followeeId);
        }
    }
}
