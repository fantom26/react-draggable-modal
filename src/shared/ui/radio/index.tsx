import { FC, InputHTMLAttributes, ReactNode, forwardRef, useId } from "react";

import "./radio.scss";

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string | ReactNode;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const { label, ...rest } = props;
  const id = useId();

  return (
    <div className="radio">
      <label className="radio__label">
        <input
          ref={ref}
          className="radio__input visually-hidden"
          id={id}
          type="radio"
          {...rest}
        />
        <span className="radio__btn">{label}</span>
      </label>
    </div>
  );
});

export interface RadioGroupProps {
  name: string;
  defaultValue?: unknown;
  data: RadioProps[];
}

export const RadioGroup: FC<RadioGroupProps> = ({ data, name }) => {
  return (
    <>
      {data.map((input, index) => (
        <Radio
          name={name}
          key={index}
          {...input}
          label={input.label}
          value={input.value}
        />
      ))}
    </>
  );
};
