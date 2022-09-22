import React from "react";
import style from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import AuthLayout from "layouts/AuthLayout";
import Button from "components/Button";
import H2 from "components/H2";
import Input from "components/Input";

import { postAutentication } from "requests/postAutentication";
import { useNotification } from "hooks/useNotification";
import { setUser } from "redux/slices/userSlice";
import { validateEmail } from "utils/validateEmail";

function AuthorizationPage() {
  const navigate = useNavigate();
  const notification = useNotification();
  const dispatch = useDispatch();

  const isAuth = useSelector(store => store.user.user.isAuth);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function checkInputs() {
    if (email !== "" && password !== "" && validateEmail(email)) {
      return false;
    } else {
      return true;
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

      if (isAuth === true) {
        notification("Вы уже авторизированы", "error");
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
          disabled={checkInputs()}
          className={
            checkInputs() ? "buttonOrder buttonRegistrAuth2" : "buttonOrder buttonRegistrAuth"
          }
        >
          Войти
        </Button>
        <div className={style.redirect}>
          <Link className={style.reg} to={"/registration"}>
            {" "}
            Зарегистрироваться
          </Link>
          <Link className={style.home} to={"/"}>
            {" "}
            На Главную
          </Link>
        </div>
      </AuthLayout>
    </>
  );
}

export default AuthorizationPage;
{
}
