import React from "react";
import { createPortal } from "react-dom";

import styles from "./styles.css";

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    const { modalContainerID } = this.props;

    this.modalRoot = document.getElementById(modalContainerID);
    this.modalRoot.appendChild(this.el);

    // prevent parent scrolling
    document.querySelector("body").style.overflow = "hidden";
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
    this.modelRoot = null;

    // restore parent scrolling
    document.querySelector("body").style.overflow = "auto";
  }

  render() {
    const { children, title, sidebar, onApply, onCancel } = this.props;

    const modal = [
      <div key={"overlay"} className={styles.Overlay} />,
      <div key={"modal"} className={styles.Modal}>
        <header className={styles.Header}>
          <h1>{title}</h1>
        </header>
        <div className={styles.Content}>{children}</div>
        <div className={styles.Aside}>{sidebar}</div>
        <footer className={styles.Footer}>
          <a href="#" onClick={e => (e.preventDefault(), onCancel())}>
            Cancel
          </a>
          <a href="#" onClick={e => (e.preventDefault(), onApply())}>
            Apply
          </a>
        </footer>
      </div>
    ];

    return createPortal(modal, this.el);
  }
}

Modal.defaultProps = {
  modalContainerID: "modal-root",
  sidebar: null
};
