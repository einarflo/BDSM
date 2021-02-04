import React, { useEffect, useRef } from 'react';
import style from './chatview.module.scss';
import styled from 'styled-components';
import { isEmpty } from 'lodash';

const ChatView = ({ posts }) => {
  let lastPostRef = useRef();

  const scrollToBottom = () => {
    if (lastPostRef.current) {
      lastPostRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    scrollToBottom();
  }, [posts]);

  return (
    <ChatViewWrapper>
      <Posts>
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
        <div style={{ float: "left", clear: "both" }}
          ref={lastPostRef}>
        </div>
      </Posts>
    </ChatViewWrapper>
  );
}

const ChatViewWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 75px);
  margin-bottom: -130px;
`;

const Posts = styled.div`
  max-height: calc(100vh - 205px);
  width: calc(100% - 20px);
  overflow: scroll;
`;

export default ChatView;