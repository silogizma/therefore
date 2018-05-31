import React, { Component } from 'react';

import styles from './styles.css';

export default function Argument({
  language,
  dialect,
  observer,
}) {
  return (
    <div className={ styles.Container }>
      language { language } <br />
      diealect { dialect } <br />
      observer { observer }
    </div>
  );
}
