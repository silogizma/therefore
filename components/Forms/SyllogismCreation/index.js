import React, { Component } from 'react';

import Syllogism from '../../Logic/Syllogism';
import styles from './styles.css';

export default function SyllogismCreation({
  buffer,
  onEdit,
}) {

  const { 
    language,
    dialect,
    observer,
  } = buffer.meta;

  return (
    <form className={ styles.Container }>
      <Syllogism
        editable
        onEdit={ onEdit }
        {...buffer}
      />
      <div className={ styles.meta }>
        <p>
          <label>language</label>
          <input
            value={ language }
            onChange={ event => onEdit('meta')('language', event.target.value) }
          />
        </p>
        <p>
          <label>dialect</label>
          <input
            value={ dialect }
            onChange={ event => onEdit('meta')('dialect', event.target.value) }
          />
        </p>
        <p>
          <label>observer</label>
          <input
            value={ observer }
            onChange={ event => onEdit('meta')('observer', event.target.value) }
          />
        </p>
      </div>
    </form>
  );
}
