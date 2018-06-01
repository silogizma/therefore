import React, { Component } from 'react';
import Link from 'next/link'

import styles from './styles.css';

export default function Layout({
  children
}) {
  return (
    <div className={ styles.grid }>
      <h1 className={ styles.logo }>
        <img
          height={ 60 }
          width={ 60 }
          alt={ 'silogizma' }
          src="/static/logo.png"
        />
      </h1>
      <ul className={ styles.nav }>
        <li>
          <Link
            href="/"
          >
            home
          </Link>
        </li>
        <li>
          <a
            href="//github.com/silogizma/therefore"
          >
            { 'readme.md (on github)' }
          </a>
        </li>
        <li>
          <Link
            prefetch href="/submit"
          >
            submit
          </Link>
        </li>
      </ul>
      <section className={ styles.content }>
        { children }
      </section>
    </div>
  );
}
