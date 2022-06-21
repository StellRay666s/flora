import React from 'react';

function Auth() {
  return (
    <>
      <h1>Авторизация</h1>
      <div className="authWrapper">
        <div className="formAuth">
          <input type="text" placeholder="email" />
          <input type="text" placeholder="Пароль" />
          <button>Войти</button>
        </div>
      </div>
    </>
  );
}

export default Auth;
