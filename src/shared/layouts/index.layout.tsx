import { Suspense } from "react";

import { GlobalLoaderWhite } from "@components/ui";
import { AUTO_CLOSE_TOAST_TIME } from "@utils/constants";
import { Outlet } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";

const IndexLayout = () => (
  <>
    <div className="wrapper" data-overlay="false">
      <Suspense fallback={<GlobalLoaderWhite />}>
        <Outlet />
      </Suspense>
    </div>
    <ToastContainer
      position="top-right"
      autoClose={AUTO_CLOSE_TOAST_TIME}
      limit={4}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      role="alert"
      rtl={false}
      transition={Slide}
      pauseOnFocusLoss
      draggable={false}
      pauseOnHover
      theme="colored"
    />
  </>
);
export default IndexLayout;
