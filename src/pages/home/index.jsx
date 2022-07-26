import React, { Fragment, useState } from "react";

import { PhoneInput, CrossClose, Rating, Input, Switch } from "components";
import Button from "components/Button";

export default function IndexPage() {
  const [name, setName] = useState("");

  return (
    <Fragment>
      <PhoneInput value={name} dispatchValue={setName} />
      <Rating />
      <CrossClose />
      <Input text={"Имя"} />
      <Input text={"Адресс"} />
      <Input text={"Эл.Почта"} />
      <Input text={"Фамилия"} />
      <Switch />
      {/* <Button classBtn={"buttonOrder"} text={"Оформить"} />
      <Button classBtn={"buttonInCart"} text={"Добавить в корзину"} /> */}
    </Fragment>
  );
}
