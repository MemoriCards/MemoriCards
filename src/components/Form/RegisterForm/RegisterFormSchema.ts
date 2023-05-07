import { z } from "zod";

export const RegisterFormSchema = z
  .object({
    email: z
      .string()
      .nonempty("Digite seu e-mail")
      .email("Preencha o email corretamente"),
    password: z
      .string()
      .nonempty("Digite sua senha")
      .min(7, "A senha precisa ter no mínimo 7 caracteres"),
    confirm: z.string().nonempty("Por favor confirme a sua senha"),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: "As senhas precisam corresponder",
    path: ["confirm"],
  });

export type TRegisterValues = z.infer<typeof RegisterFormSchema>;
