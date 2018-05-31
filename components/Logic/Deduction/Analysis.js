import React, { Component } from 'react';

import syllogismType from '../../../models/syllogismType';
import Syllogism from '../../../models/syllogism';
import WEAK_FORMS from '../../../models/weakForms';
import styles from './styles.css';

export default function Proposition({
  syllogism,
}) {
  const type = syllogismType(syllogism);
  const {
    major,
    minor,
    conclusion,
  } = syllogism;

  const propositionForm = Syllogism.getPropositionForms(
    major,
    minor,
    conclusion
  );

  const lines = [
    type && (
      <div className={ styles.ValidArgument }>
        Argument in <span>{type}</span> form.
      </div>
    ),

    type && WEAK_FORMS[propositionForm] && (
      <div className={ styles.WeakArgument }>
        <span className={ styles.DebugTitle }>Weak Argument.</span>
        <div className={ styles.Debug }>
          { type } is a weak argument form.
          It is possible to draw a stronger conclusion from the premises.
        </div>
      </div>
    ),

    !type && (
      <div className={ styles.InvalidArgument }>
        Invalid argument.
      </div>
    ),

    !type && major.universal && minor.universal && (
      <div className={ styles.Debug }>
        Major and minor propositions are universal,
        you should draw a universal conclusion.
      </div>
    )
  ];

  return (
    <div className={ styles.Analysis }>
      { lines }
    </div>
  );
}
