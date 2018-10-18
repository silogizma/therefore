import React from "react";

import Syllogism from "../Syllogism";
import Analysis from "./Analysis";
import styles from "./styles.css";

export default function Proposition({ id, interfaceLanguage, ...syllogism }) {
  return (
    <div key={id} className={styles.Proposition}>
      <Syllogism id={id} interfaceLanguage={interfaceLanguage} {...syllogism} />
      <Analysis interfaceLanguage={interfaceLanguage} syllogism={syllogism} />
    </div>
  );
}
