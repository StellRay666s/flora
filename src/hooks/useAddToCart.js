import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { postCart } from "requests/postCart";
import { patchCart } from "requests/patchCart";
import { fetchCartData } from "redux/slices/cartSlice";
import { useNotification } from "./useNotification";

function useAddToCart() {
  const cart = useSelector(state => state.cart.data);
  const isAuth = useSelector(state => state.user.user.isAuth);
  const dispatch = useDispatch();
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(false);
  const notification = useNotification();

  async function addToCart(_id) {
    if (isAuth === false) {
      notification("Для добавления товара необходимо авторизоваться", "error");
      isButtonDisabled(false);
    }

    const products = cart.map(item => item.product);
    const productId = products.filter(item => item._id === _id);
    dispatch(fetchCartData());

    if (productId.length === 0) {
      setIsButtonDisabled(true);
      await postCart(1, _id);
      dispatch(fetchCartData());
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 500);
    } else {
      for (const values of cart) {
        if (values.product._id === _id) {
          await patchCart(values.count + 1, values._id);
        }
      }
    }
  }
  return { addToCart, isButtonDisabled };
}

export { useAddToCart };
