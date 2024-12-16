import { forwardRef, useId } from "react";

import { InputProps } from "@/shared/types/input.type.ts";
import { FormField } from "@/shared/ui/form-field";
import { Label } from "@/shared/ui/label";

import "./input.scss";

// TODO handle disabled state for all form fields
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label = "",
    labelCenter,
    required,
    helpertext,
    className = "",
    error,
    wrapperclass,
    ...rest
  } = props;
  const id = useId();

  return (
    <FormField
      error={error}
      required={required}
      helpertext={helpertext}
      wrapperclass={wrapperclass}
    >
      <Label center={labelCenter} label={label} id={id} />
      <div className="input__container-wrapper">
        <input
          id={id}
          type={"text"}
          ref={ref}
          className={`input ${className}`}
          required={required}
          {...rest}
        />
      </div>
    </FormField>
  );
});
