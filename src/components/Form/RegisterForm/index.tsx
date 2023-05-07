import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../../fragments/Input/index";
import { RegisterFormSchema, TRegisterValues } from "./RegisterFormSchema";
import { useContext } from "react";
import { userContext } from "../../../providers/userContext";
import { RegisterDivStyle } from "./style";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterValues>({
    resolver: zodResolver(RegisterFormSchema),
  });
  const { doRegister } = useContext(userContext);

  const submit: SubmitHandler<TRegisterValues> = (formData) =>
    doRegister(formData);

  return (
    <>
      <RegisterDivStyle>
        <h1>Crie sua conta</h1>
        <form onSubmit={handleSubmit(submit)}>
          <div>
          <Input label="Email" type="email" {...register("email")} />
          {errors.email ? <p>{errors.email.message}</p> : null}
          </div>
          <div>
          <Input label="Senha" type="password" {...register("password")} />
          {errors.password ? <p>{errors.password.message}</p> : null}
          </div>
          <div>
          <Input
            label="Confirme a senha"
            type="password"
            {...register("confirm")}
          />
          {errors.confirm ? <p>{errors.confirm.message}</p> : null}
          </div>
          <button type="submit">Criar conta</button>
        </form>
      </RegisterDivStyle>
    </>
  );
};
