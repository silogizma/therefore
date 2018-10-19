import Link from "next/link";

import Layout from "../components/UI/Layout";
import Heading from "../components/UI/Heading";
import Landing from "../components/UI/Landing";
import Deduction from "../components/Logic/Deduction";
import Argument from "../components/Logic/Argument";

import syllogism from "../models/syllogism";
import premise from "../models/premise";
import uniqueId from "../models/uniqueId";

export default ({ url }) => {
  const { meta, syllo } = url.query;

  const [lang, dialect, observer] = meta.split(",");

  const [major, minor, conclusion] = syllo.split(",");

  const argument = syllogism({
    id: uniqueId(),
    major: premise.fromString(major),
    minor: premise.fromString(minor),
    conclusion: premise.fromString(conclusion)
  });

  return (
    <div>
      <Layout>
        <Landing />
        <div style={{ padding: 10 }}>
          <Heading>
            <i>context</i>
          </Heading>
          <Argument language={lang} dialect={dialect} observer={observer} />
          <Heading>
            <i>argument</i>
          </Heading>
          <Deduction syllogisms={[argument]} />
        </div>
      </Layout>
    </div>
  );
};
