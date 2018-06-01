import { underline } from './helpers';

import styles from './styles.css';

function input(subject, onChange) {
  return (
    <input
      value={ subject }
      onChange={ event => onChange(event.target.value)(event) }
    />
  );
}

function select(subject, onChange, conclusionOf) {
  const options = conclusionOf.map(
    ({ subject }) => subject
  );

  return (
    <select
      style={{
        width: 120,
      }}
      onChange={
        event =>
          onChange(event.target.value)(event)
      }
    >
      {
        options.map(
          (value, index) =>
            <option key={ index }>
              { value }
            </option>
        )
      }
    </select>
  );
}

export default (
  subject,
  editable,
  onChange,
  selectable,
  conclusionOf,
) => {
  return (
    <div className={ styles.Subject }>
      { editable
        ? selectable
          ? select(subject, onChange, conclusionOf)
          : input(subject, onChange)
        : underline(subject)
      }
    </div>
  );
}
