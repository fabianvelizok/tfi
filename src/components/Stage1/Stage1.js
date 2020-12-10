import cx from "classnames";

import './Stage1.css';

function Stage1(props) {
  const { className } = props;

  const classes = cx(['stage', className]);

  return (
    <div className={classes} >
      Etapa 1 - Contenido
    </div>
  );
};

Stage1.defaultProps = {
  className: undefined
}

export default Stage1;
