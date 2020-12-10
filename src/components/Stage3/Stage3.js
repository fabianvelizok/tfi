import cx from "classnames";

import './Stage3.css';

function Stage3(props) {
  const { className } = props;

  const classes = cx(['stage', className]);

  return (
    <div className={classes} >
      Etapa 3 - Contenido
    </div>
  );
};

Stage3.defaultProps = {
  className: undefined
}

export default Stage3;
