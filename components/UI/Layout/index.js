import React, { Component } from "react";
import Link from "next/link";

import translate from "../../../i18n/translate";
import styles from "./styles.css";

export default class Layout extends Component {
  render() {
    const { children, page } = this.props;
    const lang = "tr";
    return (
      <div className={styles.grid}>
        <h1 className={styles.logo}>
          <Link href={"/"}>
            <a>
              <img
                height={60}
                width={60}
                alt={"silogizma"}
                src="/static/logo.png"
              />
            </a>
          </Link>
        </h1>
        <nav className={styles.preferences}>
          <span>interface languages: tr, en</span>
          <span>i am a color blind</span>
        </nav>
        <ul className={styles.nav}>
          <li>
            <Link href="/">
              <a className={page === "home" && styles.currentLink}>
                {translate(lang, "home")}
              </a>
            </Link>
          </li>
          <li>
            <Link prefetch href="/definitions">
              <a className={page === "definitions" && styles.currentLink}>
                {translate(lang, "definitions")}
              </a>
            </Link>
          </li>
          <li>
            <Link prefetch href="/submit">
              <a className={page === "submit" && styles.currentLink}>
                {translate(lang, "submit")}
              </a>
            </Link>
          </li>
        </ul>
        <section className={styles.content}>{children}</section>
        <footer>
          <p>
            ...
            <br />
            <a href="//github.com/silogizma/therefore">
              {translate(lang, "read readme.md on github")}
            </a>
          </p>
        </footer>
      </div>
    );
  }
}
