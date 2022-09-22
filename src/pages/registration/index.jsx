import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { validateEmail } from "utils/validateEmail";
import { validatePhone } from "utils/validatePhone";

import style from "./index.module.scss";

function RegistrationPage() {
  const navigate = useNavigate();
  const isAuth = useSelector(store => store.user.user.isAuth);
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
    if (
      email !== "" &&
      password !== "" &&
      address !== "" &&
      phone !== "" &&
      name !== "" &&
      validateEmail(email) &&
      validatePhone(phone)
    ) {
      return false;
    } else {
      return true;
    }
  }
  console.log(checkInputs());

  async function registration() {
    try {
      if (isAuth === false && password.length > 5) {
        await postUsers(email, password, address, phone, name);
        const response = await postAutentication(email, password);
        const accessToken = response.data.accessToken;
        localStorage.setItem("accessToken", accessToken);
        dispatch(setUser(user));
        navigate("/");
      }
      if (password.length < 5) {
        nofication("Короткий пароль", "error");
      }
      if (isAuth === true) {
        nofication("Вы уже авторизированы", "error");
      }
    } catch (err) {
      nofication("Ошибка при регистрации", "error");
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
          disabled={checkInputs()}
          onClick={() => registration()}
          className={
            checkInputs() ? "buttonOrder buttonRegistrAuth2" : "buttonOrder buttonRegistrAuth"
          }
        >
          Зарегистрироваться
        </Button>
        <div className={style.redirect}>
          <Link to={"/authorization"} className={style.auth}>
            Авторизуйтесь
          </Link>
          <Link to={"/"} className={style.home}>
            На Главную
          </Link>
        </div>
      </AuthLayout>
    </div>
  );
}
export default RegistrationPage;
