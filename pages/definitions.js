import Link from 'next/link';

import Layout from '../components/UI/Layout';
import Heading from '../components/UI/Heading';
import Landing from '../components/UI/Landing';
import Syllogism from '../components/Logic/Syllogism';
import Deduction from '../components/Logic/Deduction';
import Argument from '../components/Logic/Argument';
import Visualization from '../components/Logic/Visualization';

import syllogism from '../models/syllogism';
import premise from '../models/premise';
import uniqueId from '../models/uniqueId';

export default ({
  url,
}) => {

  return (
    <Layout>
      <Landing />
        <div style={{ padding: 20 }}>
          <Heading>categorical proposition</Heading>
          <p>
            <quote>
              In logic, a categorical proposition is a proposition
              that asserts or denies that all or some
              of the members of one category
              are included in another.
              <br />
              <i>example: all human are mortal</i>
            </quote>
          </p>
          <hr />
          <Heading>syllogism</Heading>
          <p>
            <quote>
              In logic, an argument that applies
              deductive reasoning to arrive conclusion
              by two categorical propositions. 
              <br />
              <i>In old-french silogisme, greek συλλογισμός,
              latin syllogismos, turkish tasım.</i>
              <br />
              <br />
              <i>example:</i>
              <pre>{[
                'all human are mortal',
                'some socrates are human',
                '∴ therefore',
                'some socrates are mortal.'
              ].join('\n')}</pre>
            </quote>
          </p>
          <hr />
          <Heading>silogizma dot org</Heading>
          <p>
            <quote>
              a proof of concept to validate and falsify syllogisms.
              it's aimed to be used in arguman dot org project to
              represent logical premises in an argument tree in future.
            </quote>
          </p>
        </div>
    </Layout>
  );
};
