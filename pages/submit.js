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
  id: uniqueId(),
  major: premise.fromString('a-human-mortal'),
  minor: premise.fromString('a-liva-human'),
  conclusion: premise.fromString('a-liva-mortal'),
});

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
        <Heading>create a syllogism</Heading>
        <SyllogismCreation
          onEdit={ this.handleUpdate }
          buffer={ buffer }
        />
        <Heading>preview</Heading>
        <Deduction
          syllogisms={ [buffer] }
        />
      </Layout>
    );
  }
}