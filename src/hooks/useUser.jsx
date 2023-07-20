import { useState } from "react";
import { getUser } from "../services/getUser";

export const useUser = () => {
  const [user, setUser] = useState();

  const fetchUser = async (username) => {
    try {
      const userData = await getUser(username);
      setUser(userData);
    } catch (error) {
      console.log(error);
    }
  };

  return { user, fetchUser };
};
