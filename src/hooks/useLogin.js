import { useMutation } from "@tanstack/react-query";
import pb from "../lib/pocketbase";

const useLogin = () => {
  const login = async ({ email, password }) => {
      const authData = await pb
        .collection("users")
        .authWithPassword(email, password);
  };
  // useMutation returns isLoading and handles try catch blocks by default
  return useMutation({ mutationFn: login });
};

export default useLogin;
