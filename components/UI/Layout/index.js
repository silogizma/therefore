import React, { Component } from 'react';
import Link from 'next/link'

import styles from './styles.css';

export default function Layout({
  children
}) {
  return (
    <div className={ styles.grid }>
      <h1 className={ styles.logo }>
        <Link
          href={'/'}
        >
          <a>
            <img
              height={ 60 }
              width={ 60 }
              alt={ 'silogizma' }
              src="/static/logo.png"
            />
          </a>
        </Link>
      </h1>
      <ul className={ styles.nav }>
        <li>
          <Link
            href="/"
          >
            <a>home</a>
          </Link>
        </li>
        <li>
          <Link
            prefetch href="/definitions"
          >
            <a>definitions</a>
          </Link>
        </li>
        <li>
          <Link
            prefetch href="/submit"
          >
            <a>submit</a>
          </Link>
        </li>
      </ul>
      <section className={ styles.content }>
        { children }
      </section>
      <footer>
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
