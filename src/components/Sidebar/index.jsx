import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './sidebar.css';
import axios from 'axios';
import { isEmpty } from 'lodash';
import bdsm from '../../images/BDSM2.png';

const Sidebar = ({ logout, selectChannel, username }) => {
  const [channels, setChannels] = useState([]);
  const [newChannel, setNewChannel] = useState(false);
  const [newChannelName, setNewChannelName] = useState("");
  const [loading, setLoading] = useState(false);

  const createChannel = () => {
    setLoading(true);
    axios.post(`https://www.dogetek.no/api/api.php/channels/`, {
      name: newChannelName,
    }, { headers: { 'content-type': 'application/x-www-form-urlencoded' } })
      .then(res => {
        // Wait for slow DB 
        const interval = setInterval(() => {
          setNewChannel(false);
          getChannels();
          clearInterval(interval);
          setLoading(false);
        }, 10000);
      })
      .catch(err => {
        console.log("Something fishy is going on");
      });
  }

  const getChannels = () => {
    axios.get(`https://www.dogetek.no/api/api.php/channels/`, { mode: 'no-cors' })
      .then(res => setChannels(res.data))
      .catch(err => {
        console.log("Something fishy is going on");
      })
  };

  useEffect(() => getChannels(), []);


  return (
    <Background>
      <BDSMLogo src={bdsm} />
      <ChannelList>
        {
          !isEmpty(channels) && channels.map((channel, index) => {
            return (
              <Channel key={index} onClick={() => selectChannel(channel)}>{`# ${channel.name}`}</Channel>
            )
          })
        }
        {
          newChannel ?
            <NewChannel disabled={loading} placeholder="Channelname" onChange={e => setNewChannelName(e.target.value)} onKeyPress={(e) => {
              if ((e.key === 'Enter') && (e.target.value !== undefined)) {
                createChannel()
              }
            }} />
            : <Channel key={"new"} onClick={() => setNewChannel(true)}><b>+ Create a channel</b></Channel>

        }
        <SignoutButton onClick={logout}>Sign out</SignoutButton>
      </ChannelList>
    </Background>
  );
}

const NewChannel = styled.input`
        font-family : 'Avenir';
        width: 90%;
        font-size: 16px;
        line-height: 1.5;
        color: #495057;
        background-color: #00000070;
        padding-left: 15px;
        margin-top: 10px;
        border: none;
        border-radius: 8px;
        outline: none;
        :focus {
    border: none;
    outline: none;
  }
      `;

const Channel = styled.div`
  color: #FFFFFF90;
  font-size: 16px;
  text-overflow: ellipsis;
  /* line-height: 30px; */
  margin-top: 10px;
  cursor: pointer;
`;

const ChannelList = styled.div`
  margin: 20px;
  width: calc(100% - 40px);
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Background = styled.div`
  height: 100vh - 40px;
  width: 30vw;
  min-width: 300px;
  font-family : 'Avenir';
  background-image: linear-gradient(180deg, #2C333B 0%, #1E2128 100%);
  margin: 20px;
  border-radius: 8px;
  box-shadow inset 1px 1px 8px #00000070;
  overflow-y: scroll;
`;

const BDSMLogo = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 8vw;
  display: block;
  max-width: 400px;
  min-width: 200px;
  padding-bottom: 40px;
  padding-top: 40px;
`;

const SignoutButton = styled.div`
  color: white;
  font-size: 20px;
  margin-top: 40px;
  text-align: center;

  background-image: linear-gradient(-135deg, #D53F3F 0%, #AB3232 100%);
  box-shadow: 0 4px 8px 1px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
      
  font-family : 'Avenir';
  cursor: pointer;
`;

export default Sidebar;
