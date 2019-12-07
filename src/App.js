import React from 'react';
import SignUp from './components/SignUp/SignUp';
import Main from './components/Main/Main';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';

import { Route } from 'react-router-dom';

const isLoginIng = true;
const App = () => {
  return (
    <>
      <Route exact path={isLoginIng === true ?  "/:category?" : false} component={Main} />
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path={isLoginIng === true ? "/landing" : "/"} component={Landing} />
    </>
  );
};

export default App;