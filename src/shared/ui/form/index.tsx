import { FC, ReactNode } from "react";

import { Checkbox } from "@/shared/ui/checkbox";
import { Input } from "@/shared/ui/input";
import { RadioGroup } from "@/shared/ui/radio";
import { TextArea } from "@/shared/ui/textarea";

interface FormProps {
  classes?: string;
  children: ReactNode;
  onSubmit: (data: unknown) => void;
}

export const Form: FC<FormProps> = (props) => {
  const { children, classes, onSubmit } = props;

  return (
    <form onSubmit={onSubmit} className={classes}>
      {children}
    </form>
  );
};

export default {
  Root: Form,
  Input,
  TextArea,
  Checkbox,
  RadioGroup
};
