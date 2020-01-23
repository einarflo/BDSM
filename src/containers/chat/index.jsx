import React, { Component } from 'react';

// import style from './style.scss';
// import logo from '../../instadoge-transparant.png';
// import login from '../../Authenticate.png';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';
import ChatView from '../../components/ChatView';
import './chat.css';
import SendBox from '../../components/SendBox';
import axios from 'axios';


class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: undefined,
      posts: {}
    }
  }

  selectChannel = (channel) => {
    this.setState({
      channel: channel
    }, () => this.getPosts())

  }

  getPosts = () => {
    const { channel } = this.state;
    axios.get(`http://www.dogetek.no/api/api.php/channel_posts/${channel.id}/`, { mode: 'no-cors' })
      .then(res => {
        console.log(res);
        this.setState({
          posts: res.data
        })
      })
      .catch(err => {
        console.log("Something fishy is going on");
      });
  }

  render() {
    const { channel, posts } = this.state;
    const { username } = this.props;
    return (
      <div className="chat">
        <Sidebar selectChannel={this.selectChannel} logout={this.props.logout} />
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

      </div>
    );
  }
}

export default Chat;
