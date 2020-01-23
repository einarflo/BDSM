import React, { Component } from 'react';

// import style from './style.scss';
// import logo from '../../instadoge-transparant.png';
// import login from '../../Authenticate.png';
import './topbar.css';

class Topbar extends Component {
  render() {
    const { channel } = this.props;
    return (
      <div className="topbar">
        <div className={"channelName"}>{channel}</div>
      </div>
    );
  }
}

export default Topbar;
