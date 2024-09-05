interface TweetType {
  id: string;
  userId: string;
  user: {
    username: string;
    name: string;
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
}

export default TweetType;
