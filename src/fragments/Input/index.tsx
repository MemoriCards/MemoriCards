import { InputHTMLAttributes, forwardRef, ForwardedRef } from "react";
import { InputDiv } from "./style";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = forwardRef(
  ({ label, ...rest }: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <InputDiv>
        {label ? <label>{label}</label> : null}
        <input ref={ref} {...rest} />
      </InputDiv>
    );
  }
);
