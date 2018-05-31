import Link from 'next/link';

import Layout from '../components/UI/Layout';
import Heading from '../components/UI/Heading';
import Syllogism from '../components/Logic/Syllogism';
import Deduction from '../components/Logic/Deduction';
import Premise from '../components/Logic/Premise';
import Argument from '../components/Logic/Argument';

import syllogism from '../models/syllogism';
import premise from '../models/premise';
import uniqueId from '../models/uniqueId';

export default ({
  url,
}) => {

  const {
    meta,
    syllo,
  } = url.query;

  const [
    lang,
    dialect,
    observer,
  ] = meta.split(',');

  const [
    major,
    minor,
    conclusion,
  ] = syllo.split(',');

  const argument = syllogism({
    id: uniqueId(),
    major: premise.fromString(major),
    minor: premise.fromString(minor),
    conclusion: premise.fromString(conclusion),
  });

  return (
    <div>
      <Layout>
        <Heading>context</Heading>
        <Argument
          language={ lang }
          dialect={ dialect }
          observer={ observer }
        />
        <Heading>deduction</Heading>
        <Deduction
          syllogisms={ [argument] }
        />
      </Layout>
    </div>
  );
};
