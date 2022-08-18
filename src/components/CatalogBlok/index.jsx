import React from "react";
import style from "./index.module.scss";
import ProductCard from "components/ProductCard";
import H1 from "components/H1";
import Circle2 from "assets/gif/Circle2.gif";

function CatalogBlock({ data, isLoading }) {
  return (
    <>
      {" "}
      <h1 className={style.title}>
        <H1>КАТАЛОГ</H1>
      </h1>
      <div className={style.wrapperCarts}>
        {data.map(obj =>
          isLoading ? (
            <ProductCard {...obj} />
          ) : (
            <div className={style.Loading}>
              <img alt="...Загрузка" src={Circle2} />
            </div>
          )
        )}
      </div>
    </>
  );
}

export default CatalogBlock;
