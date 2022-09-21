import React from 'react';
import LoginComponent from './components/login.component';
import "bootstrap/dist/css/bootstrap.min.css";

export const Login = ({admin, dataKey, api}) => {
  return <LoginComponent adminPage={admin} dataKey={dataKey} apiUrl={api} />;
};
