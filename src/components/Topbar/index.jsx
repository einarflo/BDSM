import React from 'react';
import styled from 'styled-components';

const Topbar = ({ channel }) => {
  return (
    <TopbarWrapper>
      <ChannelName>{`# ${channel}`}</ChannelName>
    </TopbarWrapper>
  );
}

const TopbarWrapper = styled.div`
  height: 75px;
  width: 100 %;
`;

const ChannelName = styled.div`
  font-size: 20px;
  line-height: 70px;
  color: white;
`;

export default Topbar;
