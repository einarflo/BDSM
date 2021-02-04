import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';
import ChatView from '../../components/ChatView';
import './chat.css';
import SendBox from '../../components/SendBox';
import axios from 'axios';

const Chat = ({ username, logout }) => {

  const [channel, setChannel] = useState();
  const [posts, setPosts] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      if (channel) {
        axios.get(`http://www.dogetek.no/api/api.php/channel_posts/${channel.id}/?hash=${Math.random() * 21991919393914999419}`, { mode: 'no-cors' })
          .then(res => {
            if (JSON.stringify(res.data) !== JSON.stringify(posts)) {
              setPosts(res.data);
            }
          })
          .catch(err => {
            console.log("Something fishy is going on");
          });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [channel, posts]);

  return (
    <Background>
      <Sidebar selectChannel={setChannel} logout={logout} />
      {
        channel ?
          <div className="theOtherSide">
            <Topbar channel={channel.name} />
            <ChatView channel={channel} posts={posts} />
            <SendBox channel={channel} username={username} />
          </div>
          :
          <div className="noChannel">
            Select a channel
          </div>
      }
    </Background>
  );
}

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  font-family : 'Avenir';
  background-image: linear-gradient(180deg, #3B3F48 0%, #1A1D25 100%);
  display: flex;
`;

export default Chat;
