import React, { Component } from "react";

import Layout from "../components/UI/Layout";
import Heading from "../components/UI/Heading";
import Deduction from "../components/Logic/Deduction";
import SyllogismCreation from "../components/Forms/SyllogismCreation";
import syllogism from "../models/syllogism";
import premise from "../models/premise";
import determineInterfaceLanguage from "../i18n/languageFromRequest";
import translate from "../i18n/translate";

const INITIAL_STATE = syllogism({
  id: "burdan-baksan-bir-unique-id",
  major: premise({
    universal: true,
    affirmative: true,
    subject: "humans",
    predicate: "mortal"
  }),
  minor: premise({
    universal: false,
    affirmative: true,
    subject: "socrates",
    predicate: "human"
  }),
  conclusion: premise({
    universal: false,
    affirmative: true,
    subject: "socrates",
    predicate: "mortal"
  }),
  meta: {
    language: "",
    dialect: "",
    observer: ""
  }
});

const ShareLink = ({ syllogism, base }) => {
  const path = [base, buildSyllogismPath(syllogism)].join("?");

  return (
    <a
      href={path}
      target={"_blank"}
      style={{
        fontSize: 30,
        cursor: "pointer",
        color: "#0a839a",
        textDecoration: "none",
        borderBottom: "1px solid #0a839a",
        background: "rgba(217, 250, 252, 0.3)",
        padding: 2
      }}
    >
      {path}
    </a>
  );
};

const buildSyllogismPath = ({ major, minor, conclusion, meta }) => {
  const propositions = [
    [
      premise.getPropositionForm(major).toLowerCase(),
      major.subject,
      major.predicate
    ].join("-"),

    [
      premise.getPropositionForm(minor).toLowerCase(),
      minor.subject,
      minor.predicate
    ].join("-"),

    [
      premise.getPropositionForm(conclusion).toLowerCase(),
      conclusion.subject,
      conclusion.predicate
    ].join("-")
  ].join(",");
  return [
    `meta=${[meta.language, meta.dialect, meta.observer].join(",")}`,
    `syllo=${propositions}`
  ].join("&");
};

export default class extends Component {
  static getInitialProps({ req }) {
    return {
      language: determineInterfaceLanguage(
        typeof location !== "undefined" ? { headers: location } : req
      )
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      buffer: INITIAL_STATE
    };

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(part) {
    return (key, value) => {
      const buffer = {
        ...this.state.buffer,
        [part]: premise({
          ...this.state.buffer[part],
          [key]: value
        })
      };

      this.setState({
        buffer
      });
    };
  }

  render() {
    const { buffer } = this.state;
    const { language } = this.props;
    return (
      <Layout page="submit">
        <div style={{ padding: 10 }}>
          <Heading>
            <i>{translate(language, "new argument")}</i>
          </Heading>
          <SyllogismCreation
            interfaceLanguage={language}
            onEdit={this.handleUpdate}
            buffer={buffer}
          />
          <Heading>
            <i>{translate(language, "preview")}</i>
          </Heading>
          <Deduction interfaceLanguage={language} syllogisms={[buffer]} />
          <Heading>
            <i>{translate(language, "share")}</i>
          </Heading>
          <ShareLink
            syllogism={buffer}
            base={`http://silogizma.org/syllogism`}
          />
        </div>
      </Layout>
    );
  }
}
