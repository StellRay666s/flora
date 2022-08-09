import { axiosClient } from "utils/axiosClient";

async function postReAuth(accessToken) {
  const response = await axiosClient.post("/authentication", {
    accessToken: accessToken,
    strategy: "jwt",
  });
  return response;
}

export { postReAuth };
