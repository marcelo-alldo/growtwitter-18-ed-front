import TweetStyled from './TweetStyled';
import commentTweet from '../../../public/icone_responder.svg';
import retweet from '../../../public/icone_retweet.svg';
import TweetDivStyled from './TweetDivStyled';
import HeartTweet from './HeartTweet';
import Avatar from '../Avatar';
import { useEffect, useState } from 'react';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import TweetType from '../../types/TweetType';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getTweetsFromRedux } from '../../store/models/tweetsSlice';

interface TweetsProps {
  user: boolean;
}

function Tweets({ user }: TweetsProps) {
  const [tweets, setTweets] = useState<TweetType[]>([]);
  const date = new Date();
  const timestamp = date.toISOString();
  const dispatch = useAppDispatch();
  const tweetsRedux = useAppSelector(state => state.tweets);
  const userSelector = useAppSelector(state => state.userLogin);

  const getTweets = () => {
    setTweets(tweetsRedux.tweets.data);
  };

  useEffect(() => {
    dispatch(getTweetsFromRedux({ token: userSelector.user.token, userId: user ? userSelector.user.id : '' }));
  }, []);

  useEffect(() => {
    if (userSelector.user.token) {
      getTweets();
    }
  }, []);

  useEffect(() => {
    getTweets();
  }, [tweetsRedux]);

  const handleRetweet = (tweet: TweetType) => {
    console.log(tweet);
  };

  return (
    <>
      <TweetStyled>
        {tweets.map(item => {
          return (
            <TweetDivStyled key={item.id}>
              <Avatar useBorder={false} useWidth={true} src={item.userId.replace(/[^0-9.]+/g, '')} />
              <div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <b>{item.user.name}</b>
                  <p>
                    @{item.user.username} • {formatDistance(item.createdAt, timestamp, { locale: ptBR })}
                  </p>
                </div>
                <p>{item.content}</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button>
                    <img src={commentTweet} alt="comment-tweet" />
                    <p>0</p>
                  </button>
                  <HeartTweet
                    getTweets={getTweets}
                    tweet={item}
                    enable={item.likes.find(like => like.userId === userSelector.user.id) ? true : false}
                    likesLength={`${item.likes.length}`}
                  />
                  <button onClick={() => handleRetweet(item)}>
                    <img src={retweet} alt="retweet" />
                    <p>0</p>
                  </button>
                </div>
              </div>
            </TweetDivStyled>
          );
        })}
      </TweetStyled>
    </>
  );
}

export default Tweets;
