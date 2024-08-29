import TweetStyled from './TweetStyled';
import { doGet } from '../../services/api';
import commentTweet from '../../../public/icone_responder.svg';
import TweetDivStyled from './TweetDivStyled';
import HeartTweet from './HeartTweet';
import Avatar from '../Avatar';
import { useEffect, useState } from 'react';

interface TweetProps {
  user: boolean;
}

function Tweet({ user }: TweetProps) {
  const [tweets, setTweets] = useState<[]>([]);
  async function getTweets() {
    const userLogged = JSON.parse(localStorage.getItem('userLogged') || '');
    console.log(`/tweet/${user ? userLogged?.id : ''}`, `${userLogged?.token}`);

    const response = await doGet(`/tweet/${user ? userLogged?.id : ''}`, `${userLogged?.token}`);

    setTweets(response.data);
  }
  useEffect(() => {
    getTweets();
  }, []);

  return (
    <>
      <TweetStyled>
        {tweets.map(item => {
          return (
            <TweetDivStyled key={item.id}>
              <Avatar border={true} width={true} src={item.id[0]} />
              <div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <b>{item.user.name}</b>
                  <p>@{item.user.username} • 3h</p>
                </div>
                <p>{item.content}</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a>
                    <img src={commentTweet} alt="comment-tweet" />
                    <p>0</p>
                  </a>
                  <a>
                    <HeartTweet enable={false} />
                    <p>{item._count.likes}</p>
                  </a>
                </div>
              </div>
            </TweetDivStyled>
          );
        })}
      </TweetStyled>
    </>
  );
}
export default Tweet;
