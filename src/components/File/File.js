import cx from 'classnames';
import IconImg from "../IconImg/IconImg";
import IconDoc from "../IconDoc/IconDoc";

import './File.css';

function File(props) {
  const { className, path, type, title } = props;

  const classes = cx(['file', className]);

  return (
    <div className={classes} onClick={() => {alert("Implementar popup!")}}>
      <h3>{title}</h3>
      {type === "img" ? <IconImg /> : <IconDoc />}
    </div>
  );
};

File.defaultProps = {
  className: undefined
};

export default File;
