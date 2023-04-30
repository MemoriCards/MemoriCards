import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z
    .string()
    .nonempty("Campo Obrigatório")
    .min(3, "Preencha o email corretamente")
    .email("Preencha o email corretamente"),
  password: z
    .string()
    .nonempty()
    .min(7, "A senha precisa ter no mínimo 7 caracteres"),
});

export type TLoginValues = z.infer<typeof LoginFormSchema>;
