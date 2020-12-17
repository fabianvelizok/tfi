import cx from "classnames";
import { files } from "./Stage2.constants";
import File from "../File/File";

import './Stage2.css';

function Stage2(props) {
  const { className } = props;

  const classes = cx(['stage', className]);

  return (
    <div className={classes} >
      <h2>Etapa 2</h2>

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

Stage2.defaultProps = {
  className: undefined
}

export default Stage2;
