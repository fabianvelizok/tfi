import { useState } from "react";

import cx from 'classnames';
import IconImg from "../IconImg/IconImg";
import IconDoc from "../IconDoc/IconDoc";
import Modal from "../Modal/Modal";
import Iframe from "../Iframe/Iframe";

import './File.css';

function File(props) {
  const { className, path, type, title } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const classes = cx(['file', className]);

  return (
    <div>
      <div className={classes} onClick={() => { setIsModalOpen(!isModalOpen) }}>
        <h3 className="file__title">{title}</h3>
        {type === "img" ? <IconImg /> : <IconDoc />}
      </div>

      {isModalOpen && (
        <Modal title={title} onCloseHandler={() => { setIsModalOpen(false) }}>
          <Iframe src={path} />
        </Modal>
      )}
    </div>
  );
};

File.defaultProps = {
  className: undefined
};

export default File;
