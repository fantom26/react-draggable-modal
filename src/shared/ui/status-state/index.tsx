import { FC, ReactNode } from "react";

import { MdError } from "react-icons/md";

import { WarningWindow } from "@/shared/ui";

interface StatusStateProps {
  title: string;
  img?: ReactNode;
}

export const StatusState: FC<StatusStateProps> = ({
  title,
  img = <MdError size={70} color="var(--error)" />
}) => (
  <WarningWindow>
    <WarningWindow.Image>{img}</WarningWindow.Image>
    <WarningWindow.Title title={title} />
  </WarningWindow>
);
