import { FC } from "react";

import "./loader.scss";

interface LoaderProps {
  loading: boolean;
}

export const Loader: FC<LoaderProps> = ({ loading }) => {
  return (
    <div className={loading ? "spinner-wrapper" : "spinner-wrapper--hidden"}>
      <div className="spinner spinner--center">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="spinner__dot"></div>
        ))}
      </div>
    </div>
  );
};
