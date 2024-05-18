import { jwtDecode } from "jwt-decode";

export const getTokenData = (token: string) => {
  if (!token) return null;
  try {
    const decoded: any = jwtDecode(token);
    return decoded;
  } catch (error) {
    // console.log(error);
    return null;
  }
};
