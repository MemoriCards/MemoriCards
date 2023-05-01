import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../../../fragments/Input/index';
import { LoginFormSchema, TLoginValues } from './LoginFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';


export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TLoginValues>({
        resolver: zodResolver(LoginFormSchema)
    })

    const submit: SubmitHandler<TLoginValues> = (formData) => console.log(formData)

    return (
        <>
            <h1>Entrar</h1>
            <form onSubmit={handleSubmit(submit)} noValidate>
                <Input label='Email' type='email' {...register("email")} />
                {errors.email ? <p>{errors.email.message}</p> : null}
                <Input label='Senha' type='password' {...register("password")} />
                {errors.password ?  <p>{errors.password.message}</p>: null}
                <button type='submit'>Entrar</button>
            </form>
        </>
    )
}