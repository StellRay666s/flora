import React from "react";
import style from "./index.module.scss";
import ProductCard from "components/ProductCard";
import H1 from "components/H1";
import Loading from "components/Loading";
import { useAddToCart } from "hooks/useAddToCart";
import Pagnation from "components/Pagination";

function CatalogBlock({ data = [], isLoading, setSkip, total }) {
  const { addToCart, isButtonDisabled } = useAddToCart();
  const [active, setActive] = React.useState(0);
  const page = Math.ceil(total / 6);

  function swipePage(index) {
    setSkip(index * 6);
    setActive(index);
  }

  return (
    <>
      <h1 className={style.title}>
        <H1>КАТАЛОГ</H1>
      </h1>
      {!isLoading ? (
        <div className={style.wrapperCarts}>
          {data.map(product => (
            <ProductCard
              disabled={isButtonDisabled}
              addToCart={addToCart}
              key={product._id}
              isLoading={isLoading}
              price={product.price}
              title={product.title}
              image={product.image}
              _id={product._id}
              id={product._id}
            />
          ))}
        </div>
      ) : (
        <Loading />
      )}{" "}
      <div className={style.wrapper_pagination}>
        {[...Array(page)].map((_, index) => {
          return <Pagnation index={index} active={active} swipePage={index => swipePage(index)} />;
        })}
      </div>
    </>
  );
}

export default CatalogBlock;
