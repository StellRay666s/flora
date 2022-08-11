import { useDispatch } from "react-redux";
import { setNotification, hiddenNotification } from "redux/slices/notifeSlice";

function useNotification() {
  const dispatch = useDispatch();

  return function notify(title, status) {
    dispatch(setNotification({ isOpen: true, message: title, status: status }));
    setTimeout(() => dispatch(hiddenNotification({ isOpen: false })), 7000);
  };
}

export { useNotification };
