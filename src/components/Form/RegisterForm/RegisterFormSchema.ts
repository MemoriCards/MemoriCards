import { z } from "zod";

export const RegisterFormSchema = z
  .object({
    email: z
      .string()
      .nonempty("Por favor insira seu email")
      .email("Preencha o email corretamente"),
    password: z
      .string()
      .nonempty("Por favor insira sua senha")
      .min(7, "A senha precisa ter no mínimo 7 caracteres"),
    confirm: z
      .string()
      .nonempty("Por favor insira a sua senha")
      .min(7, "A senha precisa ter no mínimo 7 caracteres"),
  })
  .refine(
    ({ password, confirm }) => password === confirm,
    {
        message: "As senhas precisam ser iguais",
        path: ["confirm"]
    }
  );

export type TRegisterValues = z.infer<typeof RegisterFormSchema>;
