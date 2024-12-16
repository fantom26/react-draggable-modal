import { FC, ReactNode } from "react";

import { useInputTranslation } from "@hooks";

import "./form-field.scss";

export interface FormFieldWrapper {
  wrapperclass?: string;
}

export interface FormFieldProps extends FormFieldWrapper {
  children: ReactNode;
  error?: boolean;
  helpertext?: string;
  required?: boolean;
}

export const FormField: FC<FormFieldProps> = ({ error, helpertext, children, required = false, wrapperclass }) => {
  const { handleTranslation } = useInputTranslation();
  const generateClassNames = () => {
    let classes = "form-field";

    if (error) {
      classes += " error";
    }

    if (required) {
      classes += " required";
    }

    if (wrapperclass) {
      classes += ` ${wrapperclass}`;
    }

    return classes;
  };

  return (
    <div className={generateClassNames()}>
      {children}
      {helpertext && <p className="form-field__helper-text">{handleTranslation(helpertext)}</p>}
    </div>
  );
};
