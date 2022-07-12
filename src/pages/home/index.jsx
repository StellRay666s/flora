import React, { Fragment, useState } from "react";

import { PhoneInput } from "components";

const IndexPage = () => {
  const [name, setName] = useState("");

  return (
    <Fragment>
      <PhoneInput value={name} dispatchValue={setName} />
    </Fragment>
  );
};

export default IndexPage;
