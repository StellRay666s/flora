import React, { Fragment, useState } from "react";

import { PhoneInput } from "components";

export default function IndexPage() {
  const [name, setName] = useState("");

  return (
    <Fragment>
      <PhoneInput value={name} dispatchValue={setName} />
    </Fragment>
  );
}
