import { axiosClient } from "utils/axiosClient";

async function postUsers(email = "", password = "", address = "", phone = "", name = "") {
  const response = await axiosClient.post("/users", {
    email: email,
    password: password,
    address: address,
    phone: phone,
    name: name,
  });
  return response;
}

export { postUsers };
