import { FC, ReactNode } from "react";

import { MdError } from "react-icons/md";

import { WarningWindow } from "@/shared/ui";

interface StatusStateProps {
  title: string;
  img?: ReactNode;
}

export const StatusState: FC<StatusStateProps> = ({
  title,
  img = <MdError />
}) => (
  <WarningWindow>
    <WarningWindow.Image>{img}</WarningWindow.Image>
    <WarningWindow.Title title={title} />
  </WarningWindow>
);
