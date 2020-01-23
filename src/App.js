import React, { useState } from 'react';
import './App.css';
import Login from './containers/login';
import Chat from './containers/chat';
import axios from 'axios';

const App = () => {

  const [username, setUsername] = useState();

  const setUser = (username = "admin") => {
    // Although this doesn't really do anything - i'll leave it be
    axios.post(`https://www.dogetek.no/intraDoge/login.php`, {
      username: username,
      password: "admin",
    }, { headers: { 'content-type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*' } })
      .then(res => {
        console.log(res);
        // Do something
      })
      .catch(err => {
        console.log("Something fishy is going on");
      });
    // Good security
    setUsername(username);
  }

  if (username) {
    return <Chat username={username} logout={() => setUsername()} />;
  }
  return <Login setUser={setUser} />;
}

export default App;
