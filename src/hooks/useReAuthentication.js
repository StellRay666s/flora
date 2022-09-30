import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "redux/slices/userSlice";

function useReAuthentication() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.user.user.isAuth);

  return function reAuthentication() {
    if (isAuth === false) {
      dispatch(fetchUserData());
    }
  };
}
export { useReAuthentication };
