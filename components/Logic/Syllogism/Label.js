import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './styles.css';

export default function Label({
  text,
  inline,
  className,
}) {
  const classes = classNames({
    [className]: true,
    [styles.Label]: true,
    [styles.Inline]: inline,
  });

  return (
    <div className={ classes }>
      { text }
    </div>
  );
}
