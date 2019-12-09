import React, { useState } from 'react';
import SignUp from './components/SignUp/SignUp';
import Main from './components/Main/Main';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  const [isLogin, setIsLogin] = useState({
    "access_token": "",
    "refresh_token": ""
  });
  return (
    <>
      <Route exact path="/auth/login" render={() => <Login isLogin={isLogin} setIsLogin={setIsLogin} />} />
      <Route exact path="/auth/signup" component={SignUp} />
      <Route exact path="/landing" render={() => <Landing isLogin={isLogin} setIsLogin={setIsLogin} />} />
      <Switch>
        {
          (isLogin.access_token === "" && (<Route exact path="/" render={() => <Landing isLogin={isLogin} setIsLogin={setIsLogin} />} />)) ||
          (<Route exact path={["/:category", "/"]} render={() => <Main isLogin={isLogin} setIsLogin={setIsLogin} />} />)
        }  
      </Switch>
    
      <Route render={() => (<h1>Error</h1>)} />
    </>
  );
};

export default App;