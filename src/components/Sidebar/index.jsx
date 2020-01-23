import React, { useState, useEffect } from 'react';

// import style from './style.scss';
import channelsImage from '../../images/channels.png';
import './sidebar.css';
import axios from 'axios';
import { isEmpty } from 'lodash';

const Sidebar = ({ logout, selectChannel }) => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    axios.get(`http://www.dogetek.no/api/api.php/channels/`, { mode: 'no-cors' })
      .then(res => setChannels(res.data))
      .catch(err => {
        console.log("Something fishy is going on");
      })
  }, []);


  return (
    <div className="sidebar">
      <div className={"channels"}><img src={channelsImage} alt={"CHANNELS"} /></div>
      <div className={"channelList"}>
        {
          !isEmpty(channels) && channels.map((channel, index) => {
            return (
              <div key={index} className={"channel"} onClick={() => selectChannel(channel)}>{channel.name}</div>
            )
          })
        }
        <div className={"signout"} onClick={() => logout()}>Sign out</div>
      </div>
    </div>
  );
}

export default Sidebar;
