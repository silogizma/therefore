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
      subject: 'human',
      predicate: 'kepçe',
    }),
    minor: premise({
      universal: false,
      affirmative: true,
      subject: 'orhan',
      predicate: 'human',
    }),
    conclusion: premise({
      universal: false,
      affirmative: true,
      subject: 'orhan',
      predicate: 'kepçe',
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
    lang: 'turkish',
    dialect: 'karabuk',
    observer: 'fatih',
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
