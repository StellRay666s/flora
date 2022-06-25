import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Auth() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  console.log(count);
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
      <div>
        <button>+</button>
        <button></button>
      </div>
    </>
  );
}

export default Auth;
