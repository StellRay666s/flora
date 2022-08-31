import React from "react";
import style from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import AuthLayout from "layouts/AuthLayout";
import { H2, Input } from "components";
import Button from "components/Button";
import { postAutentication } from "requests/postAutentication";
import { useNotification } from "hooks/useNotification";
import { setUser } from "redux/slices/userSlice";

function AuthorizationPage() {
  const navigate = useNavigate();
  const notification = useNotification();
  const dispatch = useDispatch();

  const { isAuth } = useSelector(store => store.user.user);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const user = {
    email: email,
    password: password,
  };

  function checkInputs() {
    for (let value in user) {
      if (user.hasOwnProperty(value) && !user[value]) {
        return false;
      } else {
        return true;
      }
    }
  }
  async function authorization() {
    try {
      const response = await postAutentication(email, password);
      const accessToken = response.data.accessToken;

      if (isAuth === false) {
        localStorage.setItem("accessToken", accessToken);
        const user = response.data.user;
        dispatch(setUser(user));
        navigate("/");
      }
    } catch (err) {
      notification("Ошибка при авторизации", "error");
    }
  }

  return (
    <>
      <AuthLayout>
        <h2>
          <H2>АВТОРИЗАЦИЯ</H2>
        </h2>
        <div>
          <Input placeholder="Email" value={email} dispatchValue={setEmail} />
        </div>
        <div>
          <Input placeholder="Пароль" value={password} dispatchValue={setPassword} />
        </div>
        <Button
          onClick={authorization}
          disabled={checkInputs() ? false : true}
          className={
            checkInputs() ? "buttonOrder buttonRegistrAuth" : "buttonOrder buttonRegistrAuth2"
          }
        >
          Войти
        </Button>
        <div className={style.redirect}>
          <p className={style.reg}>Зарегистрироваться</p>
          <p className={style.home}>На Главную</p>
        </div>
      </AuthLayout>
    </>
  );
}

export default AuthorizationPage;
{
}
