import React, { Component } from 'react';
import Link from 'next/link'

import styles from './styles.css';

export default function Layout({
  children
}) {
  return (
    <div className={ styles.grid }>
      <h1 className={ styles.logo }>
        <a
          href={'/'}
        >
          <img
            height={ 60 }
            width={ 60 }
            alt={ 'silogizma' }
            src="/static/logo.png"
          />
        </a>
      </h1>
      <ul className={ styles.nav }>
        <li>
          <Link
            href="/"
          >
            <a href={'/'}>home(example)</a>
          </Link>
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
      <footer>
        <span>
          ∴ = therefore
        </span>
        <p>
          ...
          <br />
          <a
            href="//github.com/silogizma/therefore"
          >
            read readme.md on github
          </a>
        </p>
      </footer>
    </div>
  );
}
