import cx from "classnames";

import './Stage2.css';

function Stage2(props) {
  const { className } = props;

  const classes = cx(['stage', className]);

  return (
    <div className={classes} >
      <h2>Etapa 2</h2>
    </div>
  );
};

Stage2.defaultProps = {
  className: undefined
}

export default Stage2;
