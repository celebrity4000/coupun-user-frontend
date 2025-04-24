import Cookies from "js-cookie";

const TOKEN_KEY = "access_token";

export const setToken = (token: string) =>
  Cookies.set(TOKEN_KEY, token, { expires: 7 });
export const getToken = () => Cookies.get(TOKEN_KEY);
export const removeToken = () => Cookies.remove(TOKEN_KEY);
