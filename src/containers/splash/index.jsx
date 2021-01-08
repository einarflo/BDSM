import React from 'react';
import styled from 'styled-components';
import bdsm from '../../images/bdsm.png';
import ID from '../../images/ID.png';
import Dogetek from '../../images/Small-Logo.png';

const Splash = () => {
  return (
    <SplashScreenWrapper>
      <Logo src={bdsm} />
      <Id src={ID} />
      <DogetekLogo src={Dogetek} />
    </SplashScreenWrapper>
  );
}

const SplashScreenWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Logo = styled.img`
  width: 60vw;
  max-width: 900px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Id = styled.img`
  height: 5vw;
  width: auto;
  position: absolute;
  bottom: 2%;
  right: 2%;
  min-height: 40px;
`;

const DogetekLogo = styled.img`
  height: 3vw;
  width: auto;
  position: absolute;
  bottom: 2%;
  left: 2%;
  min-height: 35px;
`;

export default Splash;