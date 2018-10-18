import React, { Component } from "react";
import Link from "next/link";
import cc from "classcat";

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
              <a className={cc({ [styles.current]: page === "home" })}>
                {translate(lang, "home")}
              </a>
            </Link>
          </li>
          <li>
            <Link prefetch href="/definitions">
              <a
                className={cc({ [styles.currentLink]: page === "definitions" })}
              >
                {translate(lang, "definitions")}
              </a>
            </Link>
          </li>
          <li>
            <Link prefetch href="/submit">
              <a className={cc({ [styles.currentLink]: page === "submit" })}>
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
