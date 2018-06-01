import Link from 'next/link';

import Layout from '../components/UI/Layout';
import Heading from '../components/UI/Heading';
import Syllogism from '../components/Logic/Syllogism';
import Deduction from '../components/Logic/Deduction';
import Argument from '../components/Logic/Argument';

import syllogism from '../models/syllogism';
import premise from '../models/premise';
import uniqueId from '../models/uniqueId';

const SYLLOGISMS = [
  syllogism({
    id: 'burdan-baksan-bir-unique-id',
    major: premise({
      universal: true,
      affirmative: true,
      subject: 'cats',
      predicate: 'happy',
    }),
    minor: premise({
      universal: false,
      affirmative: true,
      subject: 'dogs',
      predicate: 'happy',
    }),
    conclusion: premise({
      universal: false,
      affirmative: true,
      subject: 'cats',
      predicate: 'dogs',
    }),
  }),
];

export default ({
  url,
}) => {

  const {
    lang,
    dialect,
    observer,
  } = {
    lang: 'biology',
    dialect: 'english',
    observer: 'bager',
  };

  return (
    <div>
      <Layout>
        <Heading>context</Heading>
        <Argument
          language={ lang }
          dialect={ dialect }
          observer={ observer }
        />
        <Heading>deduction syllogism (tümden gelim)</Heading>
        <Deduction
          syllogisms={ SYLLOGISMS }
        />
      </Layout>
    </div>
  );
};
