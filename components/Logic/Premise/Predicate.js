import { underline } from "./helpers";

import styles from "./styles.css";

function input(predicate, onChange) {
  return (
    <input
      value={predicate}
      onChange={event => onChange(event.target.value)(event)}
    />
  );
}

function select(value, onChange, conclusionOf) {
  const options = Array.from(
    new Set(
      conclusionOf
        .map(({ predicate, subject }) => [predicate, subject])
        .reduce((a, b) => a.concat(b), [])
    )
  );

  return (
    <select
      style={{
        width: 120
      }}
      value={value}
      onChange={event => onChange(event.target.value)(event)}
    >
      {options.map((value, index) => (
        <option value={value} key={index}>
          {value}
        </option>
      ))}
    </select>
  );
}

export default (predicate, editable, onChange, selectable, conclusionOf) => {
  return (
    <div className={styles.Predicate}>
      {editable
        ? selectable
          ? select(predicate, onChange, conclusionOf)
          : input(predicate, onChange)
        : underline(predicate)}
    </div>
  );
};
