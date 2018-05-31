import React, { Component } from 'react';

import Syllogism from '../../Logic/Syllogism';
import styles from './styles.css';

export default function SyllogismCreation({
  buffer,
  onEdit,
}) {
  return (
    <form className={ styles.Container }>
      <Syllogism
        editable
        onEdit={ onEdit }
        {...buffer}
      />
    </form>
  );
}
