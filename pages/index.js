import Link from 'next/link';

import Layout from '../components/UI/Layout';
import Heading from '../components/UI/Heading';
import Landing from '../components/UI/Landing';
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
        <Landing />
        <Heading style={{ color: 'gray', paddingLeft: 10 }}>example</Heading>
        <div style={{ padding: 10 }}>
          <Heading><i>context</i></Heading>
          <Argument
            language={ lang }
            dialect={ dialect }
            observer={ observer }
          />
          <Heading><i>argument</i></Heading>
          <Deduction
            syllogisms={ SYLLOGISMS }
          />
        </div>
      </Layout>
    </div>
  );
};
