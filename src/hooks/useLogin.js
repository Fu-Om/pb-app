//import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import pb from "../lib/pocketbase";

const useLogin = () => {
  const [isLoading, setLoading] = useState(false);
  const login = async ({ email, password }) => {
    setLoading(true);
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(email, password);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return {login, isLoading};
  // useMutation returns isLoading and handles try catch blocks by default
  //return useMutation(login);
};

export default useLogin;
