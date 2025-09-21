import { FC } from "react";

import { Container } from "../container";
import "./header.scss";

export const Header: FC = () => {
  return (
    <>
      <div className="header">
        <Container>
          <div className="header__wrapper">UI components sandbox</div>
        </Container>
      </div>
    </>
  );
};
