import cx from 'classnames';

import { Link } from "react-router-dom";

import './Navbar.css';

const Navbar = props => {
  const { className } = props;

  const classes = cx(['navbar', className]);

  return (
    <nav className={classes}>
      <ul className="navbar__list">
        <li className="navbar__list-item">
          <Link className="navbar__list-link" to="/">
            Inicio
          </Link>
        </li>
        <li className="navbar__list-item">
          <Link className="navbar__list-link" to="/stage-1">
            Etapa 1
          </Link>
        </li>
        <li className="navbar__list-item">
          <Link className="navbar__list-link" to="/stage-2">
            Etapa 2
          </Link>
        </li>
        <li className="navbar__list-item">
          <Link className="navbar__list-link" to="/stage-3">
            Etapa 3
          </Link>
        </li>
        <li className="navbar__list-item">
          <Link className="navbar__list-link" to="/annexes">
            Anexos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  className: undefined
};

export default Navbar;
