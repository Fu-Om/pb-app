import pb from "./lib/pocketbase";
import { useForm } from "react-hook-form";
import useLogout from "./hooks/useLogout";
import useLogin from "./hooks/useLogin";

const Auth = () => {
  const logout = useLogout();
  const { login, isLoading } = useLogin();
  const { register, handleSubmit, reset } = useForm();
  const isLoggedIn = pb.authStore.isValid;
  const onSubmit = async (data) => {
    login({ email: data.email, password: data.password });
    reset();
  };

  if (isLoggedIn) {
    return (
      <>
        <h1>Logged In: {pb.authStore.model.email}</h1>
        <button onClick={logout}>Log Out</button>
      </>
    );
  } else {
    return (
      <>
        {isLoading && <h1>Loading...</h1>}
        {/*{isError && <h1>Invalid email or password</h1>}*/}
        <h1>Please Log In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="email" {...register("email")} />
          <input
            type="password"
            placeholder="password"
            {...register("password")}
          />

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Loading" : "Login"}
          </button>
        </form>
      </>
    );
  }
};

export default Auth;
