import React, { Component } from 'react';
import Link from 'next/link';

import Layout from '../components/UI/Layout';
import Heading from '../components/UI/Heading';
import Syllogism from '../components/Logic/Syllogism';
import Deduction from '../components/Logic/Deduction';
import Premise from '../components/Logic/Premise';
import Argument from '../components/Logic/Argument';
import SyllogismCreation from '../components/Forms/SyllogismCreation';

import syllogism from '../models/syllogism';
import premise from '../models/premise';
import uniqueId from '../models/uniqueId';

const INITIAL_STATE = syllogism({
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
  meta: {
    language: 'english',
    dialect: 'istanbul',
    observer: 'fatih',
  },
});

const ShareLink = ({ syllogism, base }) => {
  const path = [
    base,
    buildSyllogismPath(syllogism)
  ].join('?');

  return (
    <a
      href={ path }
      target={ '_blank' }
      style={{
        fontSize: 20,
        cursor: 'pointer',
        color: 'black',
        textDecoration: 'none',
        borderBottom: '2px dotted gray',
        background: 'yellow'
      }}
    >
      { path }
    </a>
  );
};

const buildSyllogismPath = ({
  major,
  minor,
  conclusion,
  meta,
}) => {
  const propositions = [
    [
      premise.getPropositionForm(major).toLowerCase(),
      major.subject,
      major.predicate,
    ].join(
      '-'
    ),

    [
      premise.getPropositionForm(minor).toLowerCase(),
      minor.subject,
      minor.predicate,
    ].join(
      '-'
    ),

    [
      premise.getPropositionForm(conclusion).toLowerCase(),
      conclusion.subject,
      conclusion.predicate,
    ].join(
      '-'
    ),
  ].join(',');
  return [
    `meta=${[meta.language, meta.dialect, meta.observer].join(',')}`,
    `syllo=${propositions}`
  ].join(
    '&'
  );
}

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buffer: INITIAL_STATE,
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
        }),
      };

      this.setState({
        buffer,
      })
    }
  }

  render() {
    const { buffer } = this.state;
    return (
      <Layout>
        <div style={{ padding: 10 }}>
          <Heading><i>create an argument</i></Heading>
          <SyllogismCreation
            onEdit={ this.handleUpdate }
            buffer={ buffer }
          />
          <Heading><i>preview</i></Heading>
          <Deduction
            syllogisms={ [buffer] }
          />
          <Heading><i>share</i></Heading>
          <ShareLink
            syllogism={ buffer }
            base={ `http://silogizma.org/syllogism` }
          />
        </div>
      </Layout>
    );
  }
}