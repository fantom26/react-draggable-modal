import { FC } from "react";

import { Outlet } from "react-router-dom";

interface ICommonLayout {
  classes: string;
}

const CommonLayout: FC<ICommonLayout> = ({ classes }) => (
  <main className={classes}>
    <Outlet />
  </main>
);
export default CommonLayout;
