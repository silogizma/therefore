import React, { Component } from 'react';

import Proposition from './Proposition';
import styles from './styles.css';

const renderSyllogism = Proposition;

export default function Deduction({
  syllogisms,
}) {
  return (
    <div className={ styles.Container }>
      { syllogisms.map(renderSyllogism) }
    </div>
  );
}
