import { HTMLProps } from "react";

import { FormFieldWrapper } from "@/shared/ui/form-field";

export interface ILabel<T> {
  name: string;
  value: T;
}

export interface ILabelWithId<T> extends ILabel<T> {
  id: string;
}

export type unionLabelsType<T> = ILabelWithId<T> | ILabel<T>;

export interface ITabs<T> {
  labels: unionLabelsType<T>[];
  selectedLabel: unionLabelsType<T>;
  onSelect: (label: unionLabelsType<T>) => void;
  classes?: string | undefined;
  wrapperClasses?: string | undefined;
}

export interface ILabelCenter {
  labelCenter?: boolean;
}

export type TextAreaProps = HTMLProps<HTMLTextAreaElement> &
  IInput &
  FormFieldWrapper &
  ILabelCenter;

export type InputProps = HTMLProps<HTMLInputElement> &
  IInput &
  FormFieldWrapper &
  ILabelCenter;

export interface IInput {
  name: string;
  error?: boolean;
  helpertext?: string;
}
