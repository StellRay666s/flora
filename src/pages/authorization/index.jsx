import React from "react";
import style from "./index.module.scss";

import { H2, Input } from "components";

import Button from "components/Button";
import Auth from "layouts/AuthLayout";

function AuthorizationPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <>
      <Auth>
        <h2>
          {" "}
          <H2>АВТОРИЗАЦИЯ</H2>
        </h2>
        <div>
          <Input placeholder="Email" value={email} dispatchValue={setEmail} />
        </div>
        <div>
          <Input placeholder="Пароль" value={password} dispatchValue={setPassword} />
        </div>
        <Button className={"buttonOrder buttonRegistrAuth"}>Войти</Button>
        <div className={style.redirect}>
          <p className={style.reg}>Зарегистрироваться</p>
          <p className={style.home}>На Главную</p>
        </div>
      </Auth>
    </>
  );
}

export default AuthorizationPage;
{
}
