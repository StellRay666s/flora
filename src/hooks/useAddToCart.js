import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { postCart } from "requests/postCart";
import { patchCart } from "requests/patchCart";
import { fetchCartData } from "redux/slices/cartSlice";

function useAddToCart() {
  const cart = useSelector(state => state.cart.data);
  const dispatch = useDispatch();
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(false);

  async function addToCart(_id) {
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
