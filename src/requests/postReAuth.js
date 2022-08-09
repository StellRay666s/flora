import { axiosClient } from "utils/axiosClient";

async function postReAuth(accessToken, strategy) {
  const response = await axiosClient.post("/authentication", {
    accessToken: accessToken,
    strategy: strategy,
  });
  return response;
}

export { postReAuth };
