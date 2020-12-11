import cx from "classnames";

import './Container.css';

function Container(props) {
  const { children, className } = props;

  const classes = cx(['container', className]);

  return (
    <div className={classes} >
      {children}
    </div>
  );
};

Container.defaultProps = {
  className: undefined
}

export default Container;
