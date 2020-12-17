import cx from "classnames";
import { files } from "./Stage3.constants";
import File from "../File/File";

import './Stage3.css';

function Stage3(props) {
  const { className } = props;

  const classes = cx(['stage', className]);

  return (
    <div className={classes} >
      <h2>Etapa 3</h2>

      <ul className="stage__list">
        {files.map(file => {
          return (
            <li key={file.title}>
              <File {...file} />
            </li>
          )
        })}
      </ul>
    </div>
  );
};

Stage3.defaultProps = {
  className: undefined
}

export default Stage3;
