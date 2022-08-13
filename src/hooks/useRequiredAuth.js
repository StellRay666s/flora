import React from "react";
import { useNavigate } from "react-router-dom";

function useRequiredAuth() {
  const accessToken = window.localStorage.getItem("accessToken");
  const navigate = useNavigate();

  React.useEffect(() => {
    if (accessToken) {
    } else {
      navigate("/authorization");
    }
  }, []);
}

export { useRequiredAuth };
