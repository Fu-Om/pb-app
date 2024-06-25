import { useEffect, useState } from "react";
import pb from "../lib/pocketbase";

const useVerified = () => {
  const [isVerified, setIsVerified] = useState(false);
  useEffect(() => {
    const checkVerified = async () => {
      const id = pb.authStore.model.id;
      const userData = await pb.collection("users").getOne(id);
      console.log(userData);
      setIsVerified(userData.verified);
    };
    const isLoggedIn = pb.authStore.isValid;
    if (isLoggedIn) checkVerified();
  }, []);

  const requestVerification = async () => {
    const email = pb.authStore.model.email;
    const res = await pb.collection('users').requestVerification(email);
    if (res) alert('Verification email sent');
  };
  return { isVerified, requestVerification };
};

export default useVerified;
