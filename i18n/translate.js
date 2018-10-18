import React from "react";

import translations from "./translations";

const baseLanguage = {};

class Localization extends React.Component {
  render() {
    const { children } = this.props;

    return <div>hey</div>;
  }
}

export default function translate(lang, text) {
  return (translations[lang] || baseLanguage)[text] || text;
}
