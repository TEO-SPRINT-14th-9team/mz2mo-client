import React from 'react';
import styled from 'styled-components';
import SplashMainTemplate from '~/src/components/Template/splash/SplashMainTemplate';

const Header = styled.header`
  height: 85px;
  background-color: ${({ theme }) => theme.colors.Darkmode.background};
  width: 100%;
`;

const Splash = () => {
  return (
    <>
      <Header>Header</Header>
      <SplashMainTemplate />
    </>
  );
};

export default Splash;