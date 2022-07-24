import React, { Fragment, useState } from "react";

import { PhoneInput, CrossClose, Rating, Input, Switch } from "components";

export default function IndexPage() {
  const [name, setName] = useState("");

  console.log(name);
  return (
    <Fragment>
      <PhoneInput value={name} dispatchValue={setName} />
      <Rating />

      <CrossClose />
      {/* <Input text={"Имя"} />
      <Input text={"Адресс"} />
      <Input text={"Эл.Почта"} />
      <Input text={"Фамилия"} /> */}

      <Switch />
    </Fragment>
  );
}
