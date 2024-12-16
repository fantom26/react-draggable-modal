import { forwardRef, useId } from "react";

import { TextAreaProps } from "@/shared/types/input.type.ts";
import { FormField } from "@/shared/ui/form-field";
import { Label } from "@/shared/ui/label";

import "../input/input.scss";
import "./textarea.scss";

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const {
      label = "",
      labelCenter,
      error,
      className = "",
      required,
      helpertext,
      wrapperclass,
      ...rest
    } = props;
    const id = useId();

    return (
      <FormField
        error={!!error}
        helpertext={helpertext}
        required={required}
        wrapperclass={wrapperclass}
      >
        <Label center={labelCenter} label={label} id={id} />
        <textarea
          id={id}
          ref={ref}
          spellCheck
          className={`input textarea scroll ${className}`}
          required={required}
          {...rest}
        ></textarea>
      </FormField>
    );
  }
);
