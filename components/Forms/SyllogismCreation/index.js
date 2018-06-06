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
    <form className={ styles.CreationForm }>
      <div className={ styles.form }>
        <Syllogism
          editable
          onEdit={ onEdit }
          {...buffer}
        />
      </div>
      <div className={ styles.meta }>
        <p>
          <label>in this language</label>
          <input
            value={ language }
            onChange={ event => onEdit('meta')('language', event.target.value) }
          />
        </p>
        <p>
          <label>dialect (maybe)</label>
          <input
            value={ dialect }
            onChange={ event => onEdit('meta')('dialect', event.target.value) }
          />
        </p>
        <p>
          <label>point of view</label>
          <input
            value={ observer }
            onChange={ event => onEdit('meta')('observer', event.target.value) }
          />
        </p>
      </div>
    </form>
  );
}
