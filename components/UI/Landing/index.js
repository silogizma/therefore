import styles from "./styles.css";
import translate from "../../../i18n/translate";

export default ({ interfaceLanguage }) => {
  return (
    <div className={styles.Landing}>
      <span>(</span>
      <span>∴</span>
      {"therefore"}
      <span>)</span>{" "}
      <span style={{ color: "black" }}>
        {translate(interfaceLanguage, "is a deductive reasoning tool")}.
      </span>
    </div>
  );
};
