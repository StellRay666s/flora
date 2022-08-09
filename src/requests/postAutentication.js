import { axiosClient } from "utils/axiosClient";

async function postAutentication(strategy, email, password) {
  const response = await axiosClient.post("/authentication", {
    strategy: strategy,
    email: email,
    password: password,
  });
  return response;
}

export { postAutentication };
