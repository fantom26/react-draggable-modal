import { Container } from "../container";
import "./footer.scss";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <div className="footer__wrapper">
          <div className="footer-copyright">© {year} All rights reserved.</div>
        </div>
      </Container>
    </footer>
  );
};
