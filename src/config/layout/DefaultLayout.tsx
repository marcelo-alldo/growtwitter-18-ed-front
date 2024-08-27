import { ReactNode } from 'react';
import DefaultLayoutStyled from './DefaultLayoutStyled';
import HeaderStyled from '../../components/HeaderStyled';
import MainStyled from '../../components/MainStyled';
import FooterStyled from '../../components/FooterStyled';

interface DefaultLayoutProps {
  children: ReactNode;
  config?: {
    navigation: boolean;
    footer: boolean;
  };
}

function DefaultLayout({ children}: DefaultLayoutProps) {
  return (
    <DefaultLayoutStyled>
        <HeaderStyled />
        <MainStyled/>
        <FooterStyled/>
    </DefaultLayoutStyled>
  );
}

export default DefaultLayout;