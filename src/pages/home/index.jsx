import React, { Fragment } from "react";
import CatalogBlock from "components/CatalogBlok";
import { useFetchBouquets } from "hooks/useFetchBouquets";

export default function IndexPage() {
  return (
    <Fragment>
      <CatalogBlock />
    </Fragment>
  );
}
