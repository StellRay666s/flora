import { axiosClient } from "utils/axiosClient";

async function postReAuth(accessToken) {
  const response = await axiosClient.post("/authentication", {
    accessToken: accessToken,
  });
  return response;
}

export { postReAuth };
