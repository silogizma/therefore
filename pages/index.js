import Layout from "../components/UI/Layout";
import Heading from "../components/UI/Heading";
import Landing from "../components/UI/Landing";
import Deduction from "../components/Logic/Deduction";
import Argument from "../components/Logic/Argument";
import translate from "../i18n/translate";
import syllogism from "../models/syllogism";
import premise from "../models/premise";

const example = syllogism({
  id: "burdan-baksan-bir-unique-id",
  major: premise({
    universal: true,
    affirmative: true,
    subject: "cats",
    predicate: "happy"
  }),
  minor: premise({
    universal: false,
    affirmative: true,
    subject: "dogs",
    predicate: "happy"
  }),
  conclusion: premise({
    universal: false,
    affirmative: true,
    subject: "cats",
    predicate: "dogs"
  })
});

export default () => {
  const { lang, dialect, observer } = {
    lang: "biology",
    dialect: "english",
    observer: "bager"
  };

  const interfaceLanguage = "tr";

  return (
    <div>
      <Layout page={"home"}>
        <Landing lang={interfaceLanguage} />
        <Heading style={{ color: "gray", paddingLeft: 10 }}>
          {translate(interfaceLanguage, "example")}
        </Heading>
        <div style={{ padding: 10 }}>
          <Heading>
            <i>{translate(interfaceLanguage, "context")}</i>
          </Heading>
          <Argument
            language={lang}
            dialect={dialect}
            observer={observer}
            interfaceLanguage={interfaceLanguage}
          />
          <Heading>
            <i>{translate(interfaceLanguage, "argument")}</i>
          </Heading>
          <Deduction
            interfaceLanguage={interfaceLanguage}
            syllogisms={[example]}
          />
        </div>
      </Layout>
    </div>
  );
};
