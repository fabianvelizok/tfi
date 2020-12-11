import cx from "classnames";
import { files } from "./Stage1.constants";

import './Stage1.css';

function Stage1(props) {
  const { className } = props;

  const classes = cx(['stage', className]);

  return (
    <div className={classes} >
      <h2>Etapa 1</h2>

      {files.map(file => {
        return (
          <div>
            <h3>{file.title}</h3>
            <iframe src={file.path}></iframe>
          </div>
        )
      })}
    </div>
  );
};

Stage1.defaultProps = {
  className: undefined
}

export default Stage1;
