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
      subject: 'insan',
      predicate: 'ölümlü',
    }),
    minor: premise({
      universal: false,
      affirmative: true,
      subject: 'liva',
      predicate: 'insan',
    }),
    conclusion: premise({
      universal: false,
      affirmative: true,
      subject: 'liva',
      predicate: 'ölümlü',
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
    lang: 'tr',
    dialect: 'karabuk',
    observer: 'fatih',
  };

  return (
    <div>
      <Layout>
        <Heading>varsayımlar</Heading>
        <Argument
          language={ lang }
          dialect={ dialect }
          observer={ observer }
        />
        <Heading>tasım</Heading>
        <Deduction
          syllogisms={ SYLLOGISMS }
        />
      </Layout>
    </div>
  );
};
