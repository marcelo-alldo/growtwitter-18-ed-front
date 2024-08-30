import { ReactNode } from 'react';
import DefaultLayoutStyled from './DefaultLayoutStyled';
import HeaderStyled from '../../components/HeaderStyled';
import MainStyled from '../../components/MainStyled';
import FooterStyled from '../../components/FooterStyled';
import MenuNavigation from '../../components/MenuNavigation/MenuNavigation';
import CardAssunto from '../../components/CardAssuntos/CardAssunto';


interface DefaultLayoutProps {
  children: ReactNode;
  config?: {
    navigation: boolean;
    footer: boolean;
  };
}

function DefaultLayout({children}: DefaultLayoutProps) {
  return (
    <DefaultLayoutStyled>
        <HeaderStyled>
          <MenuNavigation />
        </HeaderStyled>
        <MainStyled >{children}</MainStyled>
        <FooterStyled>
          <CardAssunto />
        </FooterStyled>
    </DefaultLayoutStyled>
  );
}

export default DefaultLayout;