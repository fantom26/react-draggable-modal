import { FC, ReactNode } from "react";

import { Typography } from "@/shared/ui";

import "./warning-window.scss";

const Image: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="warning-window__img image-wrapper">{children}</div>
);

const Actions: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="warning-window__actions">{children}</div>
);

const Description: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="warning-window__description">{children}</div>
);

const Title: FC<{ title: string }> = ({ title }) => (
  <Typography tag="h2" variant="h3" center className="warning-window__text">
    {title}
  </Typography>
);

interface WarningWindowProps {
  children: ReactNode;
}

interface WarningWindowComponent extends FC<WarningWindowProps> {
  Title: typeof Title;
  Actions: typeof Actions;
  Image: typeof Image;
  Description: typeof Description;
}

const WarningWindow: WarningWindowComponent = ({ children }) => (
  <div className="warning-window">{children}</div>
);

WarningWindow.Title = Title;
WarningWindow.Actions = Actions;
WarningWindow.Image = Image;
WarningWindow.Description = Description;

export { WarningWindow };
