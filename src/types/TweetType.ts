interface TweetType {
  id: string;
  userId: string;
  user: {
    id: string;
    name: string;
    username: string;
    follower: { id: string; userId: string; followerId: string }[];
    following: { id: string; userId: string; followerId: string }[];
  };
  createdAt: Date;
  content: string;
  likes: [
    {
      id: string;
      userId: string;
      tweetId: string;
    },
  ];
  replies: [
    {
      content: string;
      createdAt: string;
      id: string;
      tweetId: string;
      tweetType: string;
      updatedAt: string;
      userId: string;
      user: {
        name: string;
        username: string;
      };
    },
  ];
}

export default TweetType;
