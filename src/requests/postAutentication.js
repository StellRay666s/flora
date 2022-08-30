import { axiosClient } from "utils/axiosClient";

async function postAutentication(email, password) {
  const response = await axiosClient.post("/authentication", {
    strategy: "local",
    email: email,
    password: password,
  });
  return response;
}

export { postAutentication };
