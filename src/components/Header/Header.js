import cx from "classnames";

import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

import "./Header.css";

function Header(props) {
  const { className } = props;

  const classes = cx(['header', className]);

  return (
    <header className={classes}>
      <Container className="header__container">
        <Logo />
        <Navbar />
      </Container>
    </header>
  );
}

Header.defaultProps = {
  className: undefined
}

export default Header;
