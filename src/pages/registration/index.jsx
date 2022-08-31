import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import AuthLayout from "layouts/AuthLayout";
import Button from "components/Button";
import H2 from "components/H2";
import Input from "components/Input";
import PhoneInput from "components/PhoneInput";

import { postUsers } from "requests/postUsers";
import { setUser } from "redux/slices/userSlice";
import { postAutentication } from "requests/postAutentication";
import { useNotification } from "hooks/useNotification";

import style from "./index.module.scss";

function RegistrationPage() {
  const navigate = useNavigate();
  const { isAuth } = useSelector(store => store.user.user);
  const dispatch = useDispatch();
  const nofication = useNotification();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const user = {
    name: name,
    email: email,
    password: password,
    address: address,
    phone: phone,
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

  async function registration() {
    try {
      await postUsers(email, password, address, phone, name);
      const response = await postAutentication(email, password);
      const accessToken = response.data.accessToken;

      if (isAuth === false) {
        localStorage.setItem("accessToken", accessToken);
        dispatch(setUser(user));
        navigate("/");
      }
    } catch (err) {
      nofication("Ошибка при регистрации", false);
    }
  }

  return (
    <div>
      <AuthLayout>
        <h2>
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
        <Button
          disabled={checkInputs() ? false : true}
          onClick={() => registration()}
          className={
            checkInputs() ? "buttonOrder buttonRegistrAuth" : "buttonOrder buttonRegistrAuth2"
          }
        >
          Зарегистрироваться
        </Button>
        <div className={style.redirect}>
          <p className={style.auth}>Авторизуйтесь</p>
          <p className={style.home}>На Главную</p>
        </div>
      </AuthLayout>
    </div>
  );
}
export default RegistrationPage;
