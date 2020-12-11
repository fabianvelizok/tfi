import cx from "classnames";
import { files } from "./Stage1.constants";
import File from "../File/File";

import './Stage1.css';

function Stage1(props) {
  const { className } = props;

  const classes = cx(['stage', className]);

  return (
    <div className={classes} >
      <h2>Etapa 1</h2>

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

Stage1.defaultProps = {
  className: undefined
}

export default Stage1;
