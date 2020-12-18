import { useState } from "react";

import cx from 'classnames';
import Modal from "../Modal/Modal";

import './EndButton.css';

function EndButton(props) {
  const { className } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const classes = cx(['endButton', 'animation-pulse', className]);

  return (
    <div>
      <div className="endButton__wrapper">
        <button className={classes} onClick={() => { setIsModalOpen(!isModalOpen) }}>Fin</button>
      </div>

      {isModalOpen && (
        <Modal title="Fin" onCloseHandler={() => { setIsModalOpen(false) }}>
          <p className="endButton__thanks">
            Muchas gracias profes!!!
          </p>
        </Modal>
      )}
    </div>
  );
};

EndButton.defaultProps = {
  className: undefined
};

export default EndButton;
