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
  if (showSplashScreen) {
    return <Splash />;
  }
  return <Signin />;

  if (username) {
    return <Chat username={username} logout={() => setUsername()} />;
  }
  return <Login setUser={setUser} />;
}

export default App;
