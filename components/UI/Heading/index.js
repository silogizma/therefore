import React from "react";

import styles from "./styles.css";

export default function Heading({ children, centered, style = {} }) {
  return (
    <h3
      style={{
        ...style,
        textAlign: centered ? "center" : "left"
      }}
      className={styles.Heading}
    >
      {children}
    </h3>
  );
}
