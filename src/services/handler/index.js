import { publicHeader } from "../header";

export const login = (payload) => {
  const data = { method: "POST", payload, url: "login" };
  const res = publicHeader(data);

  return res;
};
