import React, { Fragment, useState } from "react";

import { Input } from "components";

const IndexPage = () => {
  const [name, setName] = useState("");

  return (
    <Fragment>
      <Input value={name} dispatchValue={setName} />
    </Fragment>
  );
};

export default IndexPage;
