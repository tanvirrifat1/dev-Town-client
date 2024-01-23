import { jwtDecode } from "jwt-decode";
import { TOKEN } from "../token/token";

export const getUserInfo = () => {
  const authToken = localStorage.getItem(TOKEN);

  if (authToken) {
    const deCodedData = jwtDecode(authToken);
    return deCodedData;
  } else {
    return "";
  }
};
