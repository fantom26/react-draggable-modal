import { FC, InputHTMLAttributes, ReactNode, useId } from "react";

import "./checkbox.scss";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string | ReactNode;
}

const Icon = () => {
  return (
    <svg
      width="14"
      height="11"
      viewBox="0 0 14 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.2526 1.86718C13.4089 2.02343 13.487 2.21316 13.487 2.43637C13.487 2.65959 13.4089 2.84932 13.2526 3.00557L7.19239 9.06582L6.05399 10.2042C5.89774 10.3605 5.70801 10.4386 5.4848 10.4386C5.26158 10.4386 5.07185 10.3605 4.9156 10.2042L3.77721 9.06582L0.74707 6.03568C0.59082 5.87943 0.512695 5.6897 0.512695 5.46649C0.512695 5.24328 0.59082 5.05354 0.74707 4.89729L1.88547 3.7589C2.04172 3.60265 2.23145 3.52452 2.45466 3.52452C2.67787 3.52452 2.86761 3.60265 3.02386 3.7589L5.4848 6.22821L10.9758 0.72876C11.1321 0.57251 11.3218 0.494385 11.545 0.494385C11.7683 0.494385 11.958 0.57251 12.1142 0.72876L13.2526 1.86718Z"
      />
    </svg>
  );
};

export const Checkbox: FC<CheckboxProps> = (props) => {
  const { label, checked, ...rest } = props;
  const id = useId();

  return (
    <div className="checkbox">
      <label className="checkbox__label">
        <input
          className="checkbox__input visually-hidden"
          id={id}
          type="checkbox"
          checked={checked}
          {...rest}
        />
        <span className="checkbox__btn">
          <span className="checkbox__icon">
            <Icon />
          </span>
          {label && <span className="checkbox__text">{label}</span>}
        </span>
      </label>
    </div>
  );
};
