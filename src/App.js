import React from "react";
import AuthService from "./services/auth.service";
import {Route,Routes,Navigate} from 'react-router-dom';
import Main from './components/app';
import Login from './components/login';

const App = () => {
  const user = AuthService.getUserSession();
  return (
    <Routes>
      {user && <Route path='/' exact element={<Main />}/>}
      <Route path='/login' exact element={<Login />}/>
      <Route path='/' exact element={<Navigate replace to="/login" />}/>
    </Routes>
  );
}

export default App;
