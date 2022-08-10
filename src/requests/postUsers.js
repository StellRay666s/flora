import { axiosClient } from "utils/axiosClient";

async function postUsers(email, password, adress, phone, name) {
  const response = await axiosClient.post("/users", {
    email: email,
    password: password,
    adress: adress,
    phone: phone,
    name: name,
  });
  return response;
}

export { postUsers };
