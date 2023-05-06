import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z
    .string()
    .nonempty("Digite seu e-mail")
    .min(3, "Preencha o email corretamente")
    .email("Preencha o email corretamente"),
  password: z.string().nonempty("Digite sua senha"),
});

export type TLoginValues = z.infer<typeof LoginFormSchema>;
