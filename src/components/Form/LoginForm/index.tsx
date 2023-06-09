import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../../fragments/Input/index";
import { LoginFormSchema, TLoginValues } from "./LoginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { userContext } from "../../../providers/userContext";
import { LoginFormStyle } from "./style";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginValues>({
    resolver: zodResolver(LoginFormSchema),
  });
  const { doLogin } = useContext(userContext);

  const submit: SubmitHandler<TLoginValues> = (formData) => doLogin(formData);

  return (
    <>
      <LoginFormStyle>
        <h1>Entrar</h1>
        <form onSubmit={handleSubmit(submit)} noValidate>
          <div>
            <Input label="Email" type="email" {...register("email")} />
            {errors.email ? <p>{errors.email.message}</p> : null}
          </div>
          <div>
            <Input label="Senha" type="password" {...register("password")} />
            {errors.password ? <p>{errors.password.message}</p> : null}
          </div>
          <button type="submit">ENTRAR</button>
        </form>
      </LoginFormStyle>
    </>
  );
};
