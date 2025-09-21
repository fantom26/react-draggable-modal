import { Suspense } from "react";

import { Outlet } from "react-router-dom";

import "./layout.scss";

const IndexLayout = () => (
  <>
    <div className="wrapper" data-overlay="false">
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  </>
);
export default IndexLayout;
