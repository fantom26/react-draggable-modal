import { ReactElement } from "react";

import { IoSettings } from "react-icons/io5";
import { NavLink } from "react-router-dom";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui";

import "./sidebar-menu.scss";

export interface IHeaderMenuItem {
  id: number;
  label: string;
  link: string;
  icon: ReactElement;
}

const MENU_ITEMS: IHeaderMenuItem[] = [
  {
    id: 1,
    label: "UI Settings",
    icon: <IoSettings />,
    link: "/"
  }
];

export const SidebarMenu = () => (
  <aside className="sidebar">
    <nav className="sidebar-menu">
      {MENU_ITEMS.map(({ link, label, id, icon }) => (
        <Tooltip key={id} placement="right">
          <TooltipTrigger asChild>
            <NavLink
              to={link}
              className={({ isActive }) =>
                isActive
                  ? "sidebar-menu-item sidebar-menu-item--active"
                  : "sidebar-menu-item"
              }
            >
              {icon}
            </NavLink>
          </TooltipTrigger>
          <TooltipContent>{label}</TooltipContent>
        </Tooltip>
      ))}
    </nav>
  </aside>
);
