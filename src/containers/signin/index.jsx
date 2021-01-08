import React from 'react';
import styled from 'styled-components';
import ID from '../../images/ID.png';
import IntraDogeLogoPng from '../../images/INTRADOGE.png';
import Dogetek from '../../images/Small-Logo.png';

const Signin = () => {
  return (
    <SplashScreenWrapper>
      <LoginWrapper>
        <IntraDogeLogo src={IntraDogeLogoPng} />
        <Description>Log in using your intradoge user</Description>
        <FormInput placeholder="brukernavn" />
        <FormInput placeholder="passord" type="password" />
        <LogginButton>GO</LogginButton>
        <Description>If you don’t have a user create one here</Description>
      </LoginWrapper>
      {/* <Id src={ID} />
      <DogetekLogo src={Dogetek} /> */}
    </SplashScreenWrapper>
  );
}

const LogginButton = styled.div`
  text-align: center;
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.5;
  color: white;
  background-clip: padding-box;
  border-radius: 0;
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  max-width: 500px;
  margin: auto;
  margin-bottom: 30px;

  background-image: linear-gradient(-135deg, #6F2C6F 0%, #DB2E38 100%);

  font-family : 'Avenir';

`;

const FormInput = styled.input`
  font-family : 'Avenir';
  text-align: center;
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  font-size: 1.2rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-image: none;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0;
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  max-width: 500px;
  margin: auto;
  margin-bottom: 20px;
`;

const Description = styled.div`
  text-align: center;
  padding-bottom: 40px;
`;

const SplashScreenWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  font-family : 'Avenir';
`;

const IntraDogeLogo = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: block;
  max-width: 760px;
  min-width: 225px;
`;

const LoginWrapper = styled.div`
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

export default Signin;