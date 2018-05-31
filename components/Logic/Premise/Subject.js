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

export default (
  subject,
  editable,
  onChange,
) => {
  return (
    <div className={ styles.Subject }>
      { editable
        ? input(subject, onChange)
        : underline(subject)
      }
    </div>
  );
}
