import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './containers/login';
import Chat from './containers/chat';
import Splash from './containers/splash';
import Signin from './containers/signin';
import axios from 'axios';

const App = () => {

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplashScreen(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const [username, setUsername] = useState();
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  const [error, setError] = useState(false);

  const setUser = (username = "admin", password) => {
    // Response is 302 on success ...
    axios.post(`https://www.dogetek.no/intraDoge/login.php`, `username=${username}&password=${password}`, { headers: { 'content-type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*' } })
      .then(res => {
        console.log(res);
        setError(true);
      })
      .catch(err => {
        console.log(err);
        setError(false);

        // Security by obscurity ?
        setUsername(username);
      });
  }
  if (showSplashScreen) {
    return <Splash />;
  }
  if (username) {
    return <Chat username={username} logout={() => setUsername()} />;
  }
  return <Signin setUser={setUser} error={error} />;

  if (username) {
    return <Chat username={username} logout={() => setUsername()} />;
  }
  return <Login setUser={setUser} />;
}

export default App;
