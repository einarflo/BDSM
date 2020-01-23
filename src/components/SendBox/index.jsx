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
      sendClicked();
    }
  }

  const sendClicked = () => {
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
    <div className={style.sendbox}>
      <InputBox>
        <InputText type="text" onChange={event => setInputText(event.target.value)} onKeyPress={event => inputChanged(event)} value={inputText} />
      </InputBox>
      <div className={style.sendbuttonbox} onClick={sendClicked}>
        <div className={style.button}>
          <div className={style.send}>
            SEND
            </div>
        </div>
      </div>
    </div>
  );
}

const InputBox = styled.div`
  width: 80%;
  height: 100%;
  background: white;
`;

const InputText = styled.input`
  word-wrap: break-word;
  word-break: break-all;
  height: 100%;
  width: 100%;
  background: #eeeeee;
  font-size: 15px;
  border-radius: 5px;
  
  
`;

export default SendBox;
