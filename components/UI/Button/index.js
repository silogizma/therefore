import React from "react";
import Icon from "../Icon";

import styles from "./styles.css";

export default function Button({ icon, label, onClick }) {
  return (
    <a
      href={"#"}
      className={styles.Button}
      onClick={event => (event.preventDefault(), onClick(event))}
    >
      {icon && <Icon type={icon} />}
      {label}
    </a>
  );
}
