import { FC, memo } from "react";

import "./label.scss";

interface ILabel {
  label: string;
  center?: boolean;
  id: string;
}

export const Label: FC<ILabel> = memo(({ label, id, center = false }) => {
  const generateClassNames = () => {
    let className = "label";

    if (center) {
      className += " center";
    }

    return className;
  };

  return (
    <>
      {label && (
        <label className={generateClassNames()} htmlFor={id}>
          {label}
        </label>
      )}
    </>
  );
});
