import cx from 'classnames';
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

import './Logo.css';

function Logo(props) {
  const { className, ...rest } = props;

  const classes = cx(['logo', className]);

  return (
    <Link to="/" className={classes}>
      <img alt="Logo" className="logo__img" src={logo} />
    </Link>
  );
};

Logo.defaultProps = {
  className: undefined
};

export default Logo;
