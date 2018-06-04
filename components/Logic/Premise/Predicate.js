import { underline } from './helpers';

import styles from './styles.css';

function input(predicate, onChange) {
  return (
    <input
      value={ predicate }
      onChange={ event => onChange(event.target.value)(event) }
    />
  );
}

function select(predicate, onChange, conclusionOf) {
  const options = conclusionOf.map(
    ({ predicate }) => predicate
  );

  return (
    <select
      style={{
        width: 120
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
  predicate,
  editable,
  onChange,

  selectable,
  conclusionOf
) => {
  return (
    <div
      className={ styles.Predicate }
    >
      { editable
        ? selectable
          ? select(predicate, onChange, conclusionOf)
          : input(predicate, onChange)
        : underline(predicate)
      }
    </div>
  );
}
