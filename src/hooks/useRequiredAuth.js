import { useNavigate } from "react-router-dom";
import { useNotification } from "./useNotification";

function useRequiredAuth() {
  const accessToken = window.localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const notification = useNotification();

  return function requiredAuth() {
    if (accessToken) {
    } else {
      navigate("/authorization");
      notification("Необходимо авторизироваться", "error");
    }
  };
}

export { useRequiredAuth };
