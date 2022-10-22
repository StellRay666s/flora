import React from "react";
import { useDispatch } from "react-redux";
import style from "./index.module.scss";
import Count from "components/Count";
import { setIncreasePrice, setDecreasePrice, fetchCartData } from "redux/slices/cartSlice";
import { patchCart } from "requests/patchCart";
import { deleteBoquets } from "requests/deleteBouquets";
import { formatPrice } from "utils/formatPrice";

function CartItem({
  count,
  title = "Букет в горшке тюльпаны и ромашки",
  price = "1 200",
  img,
  alt = "",
  _id,
}) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (count == 0) {
      deleteBoquets(_id);
      dispatch(fetchCartData());
    } else {
      patchCart(count, _id);
    }
  }, [count]);

  function setDecrease() {
    dispatch(setDecreasePrice(_id));
  }

  function setIncrease() {
    dispatch(setIncreasePrice(_id));
  }

  return (
    <>
      <div className={style.wrapperItem}>
        <div className={style.img}>
          <img src={img} alt={alt} />
        </div>
        <div className={style.countTittleWrapper}>
          <h3>{title}</h3>
          <div className={style.childCount}>
            <span>Кол-во:</span>
            <Count count={count} setDecrease={setDecrease} setIncrease={setIncrease} />
          </div>
        </div>
        <div className={style.price}>{formatPrice(price)} ₽</div>
      </div>
    </>
  );
}

export default CartItem;
