import { Loader } from "@/shared/ui/loader";

import "./global-loader.scss";

export const GlobalLoader = ({ loading }: { loading: boolean }) => (
  <div className="global-loader__backdrop global-loader__backdrop--gray">
    <Loader loading={loading} />
  </div>
);
