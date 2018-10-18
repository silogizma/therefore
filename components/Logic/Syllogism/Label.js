import React from "react";
import cc from "classcat";

import styles from "./styles.css";

export default function Label({ text, inline, className, children }) {
  const classes = cc({
    [className]: true,
    [styles.Label]: true,
    [styles.Inline]: inline
  });

  return <div className={classes}>{text || children}</div>;
}
