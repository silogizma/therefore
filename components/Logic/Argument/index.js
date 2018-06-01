import React, { Component } from 'react';

import styles from './styles.css';

export default function Argument({
  language,
  dialect,
  observer,
}) {
  return (
    <div className={ styles.Container }>
      <span className={ styles.Label }>
        language
      </span>
      { language } <br />
      <span className={ styles.Label }>
        diealect
      </span>
      { dialect } <br />
      <span className={ styles.Label }>
        observer
      </span>
      { observer }
    </div>
  );
}
