import TweetStyled from './TweetStyled';
import commentTweet from '../../../public/icone_responder.svg';
import retweet from '../../../public/icone_retweet.svg';
import TweetDivStyled from './TweetDivStyled';
import HeartTweet from './HeartTweet';
import Avatar from '../Avatar';
import { useEffect, useState } from 'react';
import { formatDistance, set } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import TweetType from '../../types/TweetType';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getTweetsFromRedux } from '../../store/models/tweetsSlice';
import Modal from '../modal/Modal';
import { postReplyFromRedux } from '../../store/models/replySlice';

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
  const [show, setShow] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [tweet, setTweet] = useState<TweetType>();
  const replySelector = useAppSelector(state => state.reply);

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
  }, [tweetsRedux, dispatch]);

  const handleRetweet = () => {
    if (!tweet) return;
    dispatch(postReplyFromRedux({ token: userSelector.user.token, tweetId: tweet.id, content: value }));

    setShow(false);
    setValue('');
    getTweets();
  };

  useEffect(() => {
    console.log(tweetsRedux);
    if (replySelector.loading === false) {
      setShow(false);
      setValue('');
      dispatch(getTweetsFromRedux({ token: userSelector.user.token, userId: user ? userSelector.user.id : '' }));

      getTweets();
    }
  }, [replySelector]);

  return (
    <>
      {show && (
        <Modal
          buttonTitle="Retweetar"
          placeholder="Digite seu retweet aqui!"
          actionCancel={() => setShow(false)}
          actionConfirm={handleRetweet}
          setValue={e => setValue(e.target.value)}
          value={value}
        />
      )}
      <TweetStyled>
        {tweets.map(item => {
          return (
            <>
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
                    <button
                      onClick={() => {
                        setShow(true);
                        setTweet(item);
                      }}
                    >
                      <img src={retweet} alt="retweet" />
                      <p>{item.replies.length}</p>
                    </button>
                  </div>
                </div>
              </TweetDivStyled>
              {item.replies
                ? item.replies.map(reply => (
                    <TweetDivStyled>
                      <div
                        style={{
                          marginLeft: '3rem',
                          display: 'flex',
                          paddingBottom: '10px',
                          borderLeft: '1px solid #b0b0b0',
                        }}
                      >
                        <Avatar useBorder={false} useWidth={true} src={reply.userId.replace(/[^0-9.]+/g, '')} />
                        <div>
                          <div style={{ display: 'flex', gap: '10px' }}>
                            <b>{reply.user.name}</b>
                            <p>
                              @{reply.user.username} • {formatDistance(reply.createdAt, timestamp, { locale: ptBR })}
                            </p>
                          </div>
                          <p>{reply.content}</p>
                        </div>
                      </div>
                    </TweetDivStyled>
                  ))
                : ''}
            </>
          );
        })}
      </TweetStyled>
    </>
  );
}

export default Tweets;
