import React from "react";
import style from "./index.module.scss";

import { H2, Input } from "components";
import Logo from "components/Logo";
import Button from "components/Button";
import Layout from "layouts/MainLayout";

function AuthorizationPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <>
      <Layout>
        <div className={style.wrapper}>
          <div className={style.wrapperInput}>
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
          </div>
          <div className={style.Logo}>
            <h1>
              {" "}
              <Logo />
            </h1>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default AuthorizationPage;
