import React from "react";
import AuthLayout from "layouts/AuthLayout";
import { H2, Input } from "components";
import Button from "components/Button";
import style from "./index.module.scss";
import { PhoneInput } from "components";

function RegistrationPage() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");

  return (
    <div>
      <AuthLayout>
        <h2>
          {" "}
          <H2>РЕГИСТРАЦИЯ</H2>
        </h2>
        <div>
          <Input placeholder="Имя" value={name} dispatchValue={setName} />
        </div>
        <div>
          <Input placeholder="Email" value={email} dispatchValue={setEmail} />
        </div>
        <div>
          <Input placeholder="Пароль" value={password} dispatchValue={setPassword} />
        </div>
        <div>
          <Input placeholder="Адресс" value={address} dispatchValue={setAddress} />
        </div>
        <div>
          <PhoneInput value={phone} dispatchValue={setPhone} />
        </div>
        <Button className={"buttonOrder buttonRegistrAuth"}>Зарегистрироваться</Button>
        <div className={style.redirect}>
          <p className={style.auth}>Авторизуйтесь</p>
          <p className={style.home}>На Главную</p>
        </div>
      </AuthLayout>
    </div>
  );
}

export default RegistrationPage;
