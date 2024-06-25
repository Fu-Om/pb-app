import pb from "../lib/pocketbase";
import { useQuery } from "@tanstack/react-query";

export default function useVerified() {
  const id = pb.authStore.model?.id;
  const checkVerified = async () => {
    //console.log(args);
    const userData = await pb.collection("users").getOne(id);
    return userData.verified;
  };
  return useQuery({
    queryFn: checkVerified,
    queryKey: ["check-verified", id],
  });
}

export const requestVerification = async () => {
  const email = pb.authStore.model.email;
  const res = await pb.collection("users").requestVerification(email);
  if (res) alert("Verification email sent");
};
