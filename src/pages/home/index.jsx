import React, { Fragment, useState } from "react";

import { PhoneInput, CrossClose, Rating, Input, Switch, Radio } from "components";

export default function IndexPage() {
  const [name, setName] = useState("");

  return (
    <Fragment>
      <Rating />
      <PhoneInput value={name} dispatchValue={setName} />
      <CrossClose />
      <Input text={"Имя"} />
      <Input text={"Адресс"} />
      <Input text={"Эл.Почта"} />
      <Input text={"Фамилия"} />
      <PhoneInput />
      <Switch />
    </Fragment>
  );
}
