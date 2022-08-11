import { useDispatch } from "react-redux";
import { setNotification, hiddenNotification } from "redux/slices/notificationSlice";

function useNotification() {
  const dispatch = useDispatch();

  return function notify(message, status) {
    dispatch(setNotification({ isOpen: true, message: message, status: status }));
    setTimeout(
      () => dispatch(hiddenNotification({ isOpen: false, message: message, status: status })),
      4000
    );
  };
}

export { useNotification };
