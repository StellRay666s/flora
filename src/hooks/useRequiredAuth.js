import React from "react";
import { useNavigate } from "react-router-dom";
import { useNotification } from "./useNotification";

function useRequiredAuth() {
  const accessToken = window.localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const notification = useNotification();

  React.useEffect(() => {
    if (accessToken) {
    } else {
      navigate("/authorization");
      notification("Необходимо авторизироваться", "error");
    }
  }, []);
}

export { useRequiredAuth };
