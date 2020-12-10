import cx from "classnames";

import './Stage2.css';

function Stage2(props) {
  const { className } = props;

  const classes = cx(['stage', className]);

  return (
    <div className={classes} >
      Etapa 2 - Contenido
    </div>
  );
};

Stage2.defaultProps = {
  className: undefined
}

export default Stage2;
