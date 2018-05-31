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

export default (
  predicate,
  editable,
  onChange,
) => {
  return (
    <div className={ styles.Predicate }>
      { editable
        ? input(predicate, onChange)
        : underline(predicate)
      }
    </div>
  );
}
