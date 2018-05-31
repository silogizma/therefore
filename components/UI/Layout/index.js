import React, { Component } from 'react';

import styles from './styles.css';

export default function Layout({
  children
}) {
  return (
    <div className={ styles.grid }>
      {/*<h1 className={ styles.logo }>
        <span>silogizma</span>
      </h1>
      <ul className={ styles.nav }>
        <li>home</li>
        <li>about</li>
        <li>submit an argument</li>
      </ul>*/}
      <section className={ styles.content }>
        { children }
      </section>
    </div>
  );
}
