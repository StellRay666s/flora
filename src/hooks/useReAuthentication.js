import React from "react";
import { useDispatch } from "react-redux";
import { fetchUserData } from "redux/slices/userSlice";

function useReAuthentication() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    {
      dispatch(fetchUserData());
    }
  }, []);
}
export { useReAuthentication };
