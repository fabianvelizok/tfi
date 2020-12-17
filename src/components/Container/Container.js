import cx from "classnames";

import './Container.css';

function Container(props) {
  const { children, className, Tag } = props;

  const classes = cx(['container', className]);

  return (
    <Tag className={classes} >
      {children}
    </Tag>
  );
};

Container.defaultProps = {
  className: undefined,
  Tag: 'div'
}

export default Container;
