import React, { useState } from 'react';
import "./LoginPage.css"
import { LoginForm } from '../../components/index'

const LoginPage = ({handleLogin}) => {

  return (
    <>
      <LoginForm handleLogin={handleLogin} />
    </>
  );
}

export default LoginPage;