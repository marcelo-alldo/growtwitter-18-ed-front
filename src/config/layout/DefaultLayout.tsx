import { ReactNode, useState } from 'react';
import DefaultLayoutStyled from './DefaultLayoutStyled';
import HeaderStyled from '../../components/HeaderStyled';
import MainStyled from '../../components/MainStyled';
import FooterStyled from '../../components/FooterStyled';
import MenuNavigation from '../../components/MenuNavigation/MenuNavigation';
import CardAssunto from '../../components/CardAssuntos/CardAssunto';
import { CircularProgress } from '@mui/material';

interface DefaultLayoutProps {
  children: ReactNode;
  config?: {
    navigation: boolean;
    footer: boolean;
  };
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  const [loading, setLoading] = useState<boolean>(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <DefaultLayoutStyled>
      <HeaderStyled>
        <MenuNavigation />
      </HeaderStyled>
      {loading ? <CircularProgress /> : <MainStyled>{children}</MainStyled>}
      <FooterStyled>
        <CardAssunto />
      </FooterStyled>
    </DefaultLayoutStyled>
  );
}

export default DefaultLayout;
