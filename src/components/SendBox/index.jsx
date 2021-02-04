import React, { useState } from 'react';
import style from './sendbox.module.scss';
import axios from 'axios';
import { isEmpty } from 'lodash';
import styled from 'styled-components';

const SendBox = ({ channel, username }) => {

  const [inputText, setInputText] = useState("");

  const inputChanged = (event) => {
    console.log(event.key === 'Enter');
    if (event.key === 'Enter') {
      event.preventDefault();
      sendClicked();
    }
  }

  const sendClicked = () => {
    // check for only spaces - regex
    if (!isEmpty(inputText)) {
      post();
      setInputText("");
    }
  }

  const post = () => {
    // let dic = ["channel_id": chnId,"user_id": userId, "username": userName,"content": input];
    axios.post(`http://www.dogetek.no/api/api.php/channel_posts/`, {
      channel_id: channel.id,
      user_id: "14",
      username: username,
      content: inputText
    }, { headers: { 'content-type': 'application/x-www-form-urlencoded' } })
      .then(res => {
        console.log(res);

        // Get new posts
      })
      .catch(err => {
        console.log("Something fishy is going on");
      });
  }

  return (
    <ContentWrapper>
      <InputBoxWrapper>
        <InputBox>
          <InputText type="text" placeholder={`Write to #${channel.name}`} onChange={event => setInputText(event.target.value)} onKeyPress={event => inputChanged(event)} value={inputText} />
        </InputBox>
        <div className={style.sendbuttonbox} onClick={sendClicked}>
          <div className={style.button}>
            <div className={style.send}>
              SEND
            </div>
          </div>
        </div>
      </InputBoxWrapper>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  width: 100%;
`;

const InputBoxWrapper = styled.div`
  width: calc(100% - 20px);
  height: 95px;
  display: -webkit-box;
  margin-top: 15px;
  margin-bottom: 20px;
`;

const InputBox = styled.div`
  width: 80%;
  height: 100%;
`;

const InputText = styled.textarea`
  word-wrap: break-word;
  word-break: break-all;
  height: calc(100% - 24px);
  width: calc(100% - 40px);
  background: #191C23;
  font-size: 15px;
  box-shadow inset 1px 1px 5px #000000;
  border: none;
  font-family : 'Avenir';
  border-radius: 8px;
  outline: none;
  color: white;
  resize: none;
  padding: 12px 20px;
`;

export default SendBox;
