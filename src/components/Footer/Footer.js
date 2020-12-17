import cx from "classnames";

import Container from "../Container/Container";

import "./Footer.css";

function Footer(props) {
  const { className } = props;

  const classes = cx(['footer', className]);

  return (
    <footer className="footer__container">
      <Container className={classes}>
        <h3 className="footer__copy">TFI Grupo 2</h3>
        <span>©2020 - Todos los derechos reservados.</span>
      </Container>
    </footer>
  );
}

Footer.defaultProps = {
  className: undefined
}

export default Footer;
