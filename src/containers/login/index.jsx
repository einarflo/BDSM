import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logo.png';
import name from '../../images/name.png';
import '../../App.css';

const Login = ({ setUser }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="LOGO" />
        <img src={name} className="name" alt="BASIC DOGE SUPREME MESSENGER" />
        <input className={"nicknameInput"} type={"text"} placeholder={"nickname"} onKeyPress={(e) => {
          if ((e.key === 'Enter') && (e.target.value !== undefined)) {
            setUser(e.target.value);
          }
        }
        } />
        <CreateUser>No need to create a user - or remember your password</CreateUser>
      </header>
    </div>
  );
}

const CreateUser = styled.div`
  color: white;
  font-size: 16px;
  margin-top: 5em;
  text-transform: uppercase;
  border: 1px solid white;
  padding: 3px;
  opacity: 0.2;
`;

export default Login;