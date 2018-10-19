import React from "react";
import translate from "../../../i18n/translate";

import styles from "./styles.css";

export default function Argument({
  language,
  dialect,
  observer,
  interfaceLanguage
}) {
  return (
    <div className={styles.Container}>
      <span className={styles.Label}>
        {translate(interfaceLanguage, "language")}
      </span>
      <span className={styles.Value}>{language}</span>
      <span className={styles.Label}>
        {translate(interfaceLanguage, "dialect")}
      </span>
      <span className={styles.Value}>{dialect}</span>
      <span className={styles.Label}>
        {translate(interfaceLanguage, "observer")}
      </span>
      <span className={styles.Value}>{observer}</span>
    </div>
  );
}
