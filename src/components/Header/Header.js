import cx from "classnames";

import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

import "./Header.css";

function Header(props) {
  const { className, } = props;

  const classes = cx(['header', className]);

  return (
    <Container>
      <header className={classes}>
        <Logo />
        <Navbar />
      </header>
    </Container>
  );
}

Header.defaultProps = {
  className: undefined
}

export default Header;
