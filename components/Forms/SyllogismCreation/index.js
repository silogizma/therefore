import React from "react";

import Syllogism from "../../Logic/Syllogism";
import styles from "./styles.css";

export default function SyllogismCreation({ buffer, onEdit }) {
  const { language, dialect, observer } = buffer.meta;

  return (
    <form className={styles.CreationForm}>
      <div className={styles.form}>
        <Syllogism editable onEdit={onEdit} {...buffer} />
      </div>
      <div className={styles.meta}>
        <p>
          <label>in this language</label>
          <input
            placeholder={"lisp"}
            value={language}
            onChange={event => onEdit("meta")("language", event.target.value)}
          />
        </p>
        <p>
          <label>dialect</label>
          <input
            value={dialect}
            placeholder={"clojure"}
            onChange={event => onEdit("meta")("dialect", event.target.value)}
          />
        </p>
        <p>
          <label>point of view</label>
          <input
            value={observer}
            placeholder={"author"}
            onChange={event => onEdit("meta")("observer", event.target.value)}
          />
        </p>
      </div>
    </form>
  );
}
