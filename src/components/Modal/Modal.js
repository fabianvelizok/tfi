import Container from "../Container/Container";

import './Modal.css';

import { Component } from "react";
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.el.classList.add("modal");
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      <Container className="modal__container">
        <div className="modal__header">
          <h3 className="modal__title">{this.props.title}</h3>
          <button className="modal__close" type="button" onClick={this.props.onCloseHandler}>X</button>
        </div>
        <div className="modal__content">
          {this.props.children}
        </div>
      </Container>,
      this.el,
    );
  }
}

export default Modal;
