import { postCart } from "requests/postCart";
import { useSelector, useDispatch } from "react-redux";
import { patchCart } from "requests/patchCart";
import { fetchCartData } from "redux/slices/cartSlice";

function useAddToCart() {
  const product = useSelector(state => state.cart.data);
  const dispatch = useDispatch();

  return async function addToCart(_id) {
    const products = product.map(item => item.product);
    const productId = products.filter(item => item._id === _id);

    if (productId.length === 0) {
      await postCart(1, _id);
      dispatch(fetchCartData());
    } else {
      for (const values of product) {
        if (values.product._id === _id) {
          await patchCart(values.count + 1, values._id);
          dispatch(fetchCartData());
        }
      }
    }
  };
}

export { useAddToCart };
