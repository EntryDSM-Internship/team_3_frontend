import React, { useState } from 'react';
import SignUp from './components/SignUp/SignUp';
import Main from './components/Main/Main';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';

import { Route } from 'react-router-dom';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      {
        (isLogin === true && (
          <>
          <Route exact path="/:category?" component={Main} isLogin={isLogin} />
          <Route exact path="/auth/login" render={<Login isLogin={isLogin} setIsLogin={setIsLogin} />} />
          <Route exact path="/auth/signup" component={SignUp} />
          <Route exact path="/landing" component={Landing} />
          </>
        )) ||
        (isLogin === false && (
          <>
            <Route exact path="/auth/login" component={Login} />
            <Route exact path="/auth/signup" component={SignUp} />
            <Route exact path="/" component={Landing} />
          </>
        ))
      }
      
    </>
  );
};

export default App;