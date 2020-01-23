import React, { PureComponent } from 'react';

import style from './chatview.module.scss';

import { isEmpty } from 'lodash';

class ChatView extends PureComponent {

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }


  render() {
    const { posts } = this.props;
    return (
      <div className={style.chatView}>
        <div className={style.posts}>
          {

            !isEmpty(posts) && posts.map((post, index) => {
              return (
                <div key={index} className={style.post}>
                  <div className={style.author}>{post.username}</div>
                  <div className={style.content}>{post.content}</div>
                </div>
              )
            })
          }
          <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
           </div>
        </div>
      </div>
    );
  }
}

export default ChatView;
