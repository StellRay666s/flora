import { axiosClient } from "utils/axiosClient";

async function postReAuthentication(accessToken) {
  const response = await axiosClient.post("/authentication", {
    accessToken: accessToken,
    strategy: "jwt",
  });
  return response;
}

export { postReAuthentication };
