import React from "react";

import Premise from "../Premise";
import Conclusion from "../Conclusion";
import Label from "./Label";
import translate from "../../../i18n/translate";
import styles from "./styles.css";

export default function Syllogism({
  major,
  minor,
  conclusion,
  editable,
  onEdit,

  interfaceLanguage
}) {
  return (
    <div className={styles.Container}>
      <Premise
        interfaceLanguage={interfaceLanguage}
        editable={editable}
        onEdit={onEdit("major")}
        {...major}
      />
      <Premise
        interfaceLanguage={interfaceLanguage}
        editable={editable}
        onEdit={onEdit("minor")}
        {...minor}
      />
      <Label className={styles.LabelTherefore}>
        <span>∴</span>
        {translate(interfaceLanguage, "therefore")}
      </Label>
      <Conclusion
        interfaceLanguage={interfaceLanguage}
        major={major}
        minor={minor}
        editable={editable}
        onEdit={onEdit("conclusion")}
        {...conclusion}
      />
    </div>
  );
}

Syllogism.defaultProps = {
  onEdit() {},
  editable: false
};
