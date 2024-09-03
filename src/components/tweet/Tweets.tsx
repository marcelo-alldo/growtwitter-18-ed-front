import TweetStyled from './TweetStyled';
import { doDel, doGet, doPost } from '../../services/api';
import commentTweet from '../../../public/icone_responder.svg';
import TweetDivStyled from './TweetDivStyled';
import HeartTweet from './HeartTweet';
import Avatar from '../Avatar';
import { useEffect, useState } from 'react';

interface TweetsProps {
  user: boolean;
}

function Tweets({ user }: TweetsProps) {
  const [tweets, setTweets] = useState<[]>([]);

  const userLogged = JSON.parse(localStorage.getItem('userLogged') || '{}');

  async function getTweets() {
    const response = await doGet(`/tweet/${user ? userLogged.id : ''}`, `${userLogged.token}`);

    if (response.success) {
      setTweets(response.data);
    }
  }

  useEffect(() => {
    if (userLogged.token) {
      getTweets();
    }
  }, []);

  return (
    <>
      <TweetStyled>
        {tweets.map(item => {
          return (
            <TweetDivStyled key={item.id}>
              <Avatar useBorder={false} useWidth={true} src={item.userId.replace(/[^0-9\.]+/g, '')} />
              <div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <b>{item.user.name}</b>
                  <p>@{item.user.username} • 3h</p>
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
                    enable={item.likes.find(like => like.userId === userLogged.id) ? true : false}
                    likesLength={item.likes.length}
                  />
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
