import pb from "../lib/pocketbase";
import { useState } from "react";

const useLogout = () => {
  const [dummy, setDummy] = useState(0);

  const logout = () => {
    pb.authStore.clear();
    setDummy(dummy + 1);
  };

  return logout;
};

export default useLogout;
