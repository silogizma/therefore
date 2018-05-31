import React, { Component } from 'react';

import Premise from '../Premise';
import Label from './Label';
import styles from './styles.css';

export default function Syllogism({
  major,
  minor,
  conclusion,
  editable,
  onEdit,
}) {

  return (
    <div className={ styles.Container }>
      <Premise
        editable={ editable }
        onEdit={ onEdit('major') }
        { ...major }
      />
      <Premise
        editable={ editable }
        onEdit={ onEdit('minor') }
        { ...minor }
      />
      <Label
        className={ styles.LabelTherefore }
        text={ '∴ therefore' }
      />
      <Premise
        editable={ editable }
        onEdit={ onEdit('conclusion') }
        { ...conclusion }
      />
    </div>
  );
}

Syllogism.defaultProps = {
  onEdit() {},
  editable: false,
};
