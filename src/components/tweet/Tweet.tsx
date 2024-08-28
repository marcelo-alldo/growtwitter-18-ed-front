import TweetStyled from './TweetStyled';
import doGet from '../../services/api';
import commentTweet from '../../../public/icone_responder.svg';
import TweetDivStyled from './TweetDivStyled';
import HeartTweet from './HeartTweet';

function Tweet() {
  async function getTweets() {
    // const response = await doGet('/tweets');
  }
  const tweet = [
    { id: '1', name: 'dwadaw', username: 'aaaa', content: 'aaaaaaaaa', likes: 2 },
    { id: '2', name: 'dwadwadaw', username: 'aaaa', content: 'bbbbbbb', likes: 5 },
  ];
  return (
    <>
      <TweetStyled>
        {tweet.map(item => {
          return (
            <TweetDivStyled>
              <img className="user-image" src={`https://www.gravatar.com/avatar/${item.id}?d=robohash`} />
              <div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <b>{item.name}</b>
                  <p>@{item.username} • 3h</p>
                </div>
                <p>{item.content}</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a>
                    <img src={commentTweet} alt="comment-tweet" />
                    <p>0</p>
                  </a>
                  <a>
                    <HeartTweet enable={false} />
                    <p>{item.likes}</p>
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
