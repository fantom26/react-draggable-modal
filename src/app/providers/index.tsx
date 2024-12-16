import { RouterProvider } from "react-router-dom";

import router from "@/app/config/routing/router.tsx";
import "@/app/config/styles/index.scss";

function Providers() {
  return <RouterProvider router={router} />;
}

export default Providers;
