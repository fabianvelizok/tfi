import cx from 'classnames';

import './Logo.css';

function Logo(props) {
  const { className, ...rest } = props;

  const classes = cx(['logo', className]);

  return (
    <a href="/" className={classes}>
      Logo
    </a>
  );
};

Logo.defaultProps = {
  className: undefined
};

export default Logo;
