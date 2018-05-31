import React, { Component } from 'react';

import styles from './styles.css';

export default function Heading({
  children
}) {
  return (
    <h3
      className={ styles.Heading }
    >
      { children }
    </h3>
  );
}
