import { InputHTMLAttributes, forwardRef, ForwardedRef } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Input = forwardRef(({label, ...rest}: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return(
        <div>
            {label ? <label>{label}</label> : null}
            <input ref={ref} {...rest} />
        </div>
    )
})