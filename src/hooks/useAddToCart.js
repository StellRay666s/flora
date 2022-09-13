import { postCart } from "requests/postCart";
import { useSelector, useDispatch } from "react-redux";
import { patchCart } from "requests/patchCart";
import { fetchCartData } from "redux/slices/cartSlice";

function useAddToCart() {
  const cart = useSelector(state => state.cart.data);
  const dispatch = useDispatch();

  return async function addToCart(_id) {
    const products = cart.map(item => item.product);
    const productId = products.filter(item => item._id === _id);

    if (productId.length === 0) {
      dispatch(fetchCartData());
      await postCart(1, _id);
    } else {
      for (const values of cart) {
        if (values.product._id === _id) {
          dispatch(fetchCartData());
          await patchCart(values.count + 1, values._id);
        }
      }
    }
  };
}

export { useAddToCart };
