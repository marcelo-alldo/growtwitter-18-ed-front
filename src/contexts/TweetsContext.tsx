import { createContext, ReactNode, useState } from 'react';

interface TweetsContextType {
  data: any;
  setData: (tweet: any) => void;
}

const TweetContext = createContext<TweetsContextType | undefined>(undefined);

interface TweetsProviderProps {
  children: ReactNode;
}

function TweetProvider({ children }: TweetsProviderProps) {
  const [data, setData] = useState<any>({});

  return <TweetContext.Provider value={{ data, setData }}>{children}</TweetContext.Provider>;
}

export { TweetContext };
export default TweetProvider;
