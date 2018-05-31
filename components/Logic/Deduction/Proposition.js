import React, { Component } from 'react';

import Syllogism from '../Syllogism';
import Analysis from './Analysis';
import styles from './styles.css';

export default function Proposition({
  id,
  ...syllogism,
}) {
  return (
    <div
      key={ id }
      className={ styles.Proposition }
    >
      <Syllogism
        id={ id }
        { ...syllogism }
      />
      <Analysis
        syllogism={ syllogism }
      />
    </div>
  );
}
