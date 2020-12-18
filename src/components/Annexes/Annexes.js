import { useEffect } from "react";
import cx from "classnames";
import { files } from "./Annexes.constants";
import File from "../File/File";

import './Annexes.css';

function Annexes(props) {
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

Annexes.defaultProps = {
  className: undefined
}

export default Annexes;
