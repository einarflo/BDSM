import React from 'react';
import styled from 'styled-components';
import bdsm from '../../images/BDSM2.png';

const Splash = () => {
  return (
    <SplashScreenWrapper>
      <Logo src={bdsm} />
    </SplashScreenWrapper>
  );
}

const SplashScreenWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(180deg, #3B3F48 0%, #1A1D25 100%);
`;

const Logo = styled.img`
  width: 20vw;
  max-width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Splash;