import React, { Component } from "react";

import Layout from "../components/UI/Layout";
import Heading from "../components/UI/Heading";
import Landing from "../components/UI/Landing";
import determineInterfaceLanguage from "../i18n/languageFromRequest";
import translate from "../i18n/translate";

export default class extends Component {
  static getInitialProps({ req, isServer }) {
    return {
      language: determineInterfaceLanguage(
        typeof location !== "undefined" ? { headers: location } : req
      )
    };
  }

  render() {
    const { language } = this.props;
    return (
      <Layout page={"definitions"}>
        <Landing interfaceLanguage={language} />
        <div style={{ padding: 20 }}>
          <Heading>{translate(language, "categorical proposition")}</Heading>
          <p>
            <quote>
              {translate(language, "categorical proposition | definition")}
              <br />
              <i>{translate(language, "categorical proposition | example")}</i>
            </quote>
          </p>
          <hr />
          <Heading>{translate(language, "syllogism")}</Heading>
          <p>
            <quote>
              In logic, an argument that applies deductive reasoning to arrive
              conclusion by two categorical propositions.
              <br />
              <i>
                In old-french silogisme, greek συλλογισμός, latin syllogismos,
                turkish tasım.
              </i>
              <br />
              <br />
              <i>example:</i>
              <pre>
                {[
                  "all human are mortal",
                  "some socrates are human",
                  "∴ therefore",
                  "some socrates are mortal."
                ].join("\n")}
              </pre>
            </quote>
          </p>
          <hr />
          <Heading>silogizma dot org</Heading>
          <p>
            <quote>
              a proof of concept to validate and falsify syllogisms. it's aimed
              to be used in arguman dot org project to represent logical
              premises in an argument tree in future.
            </quote>
          </p>
        </div>
      </Layout>
    );
  }
}
