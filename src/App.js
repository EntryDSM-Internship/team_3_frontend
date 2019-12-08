import React from 'react';
import SignUp from './components/SignUp/SignUp';
import Main from './components/Main/Main';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';

import { Route } from 'react-router-dom';

const isLoginIng = false;
const App = () => {
  return (
    <>
      {
        isLoginIng === true && <Route exact path="/:category?" component={Main} />
      }
      <Route exact path="/auth/login" component={Login} />
      <Route exact path="/auth/signup" component={SignUp}/>
      <Route exact path={isLoginIng === true ? "/landing" : "/"} component={Landing} />
    </>
  );
};

export default App;