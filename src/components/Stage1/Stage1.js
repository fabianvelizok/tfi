import { useEffect } from "react";
import cx from "classnames";
import { files } from "./Stage1.constants";
import File from "../File/File";

import './Stage1.css';

function Stage1(props) {
  const { className, title } = props;

  const classes = cx(['stage', className]);

  useEffect(() => {
    document.title = `TFI | ${title}`;
  }, [title]);

  return (
    <div className={classes} >
      <h2>{title}</h2>

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
