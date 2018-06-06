import React, { Component } from 'react';

import renderQuantity from './Quantity';
import renderQuality from './Quality';
import renderSubject from './Subject';
import renderPredicate from './Predicate';

import md5 from '../../../lib/md5.js';
import styles from './styles.css';

const not       = (o  =>!  o);
const identity  = (x  =>   x);

// const renderQuantity  = identity;
// const renderQuality   = identity;
// const renderSubject   = identity;
// const renderPredicate = identity;

const labelFlaggedBools = (
  first,
  second,
  firstAndSecond,
  notFirstAndSecond,
  firstAndNotSecond,
  notFirstAndNotSecond,
  defaultLabel = null
) => (
  /*
    universal || affirmative || label
    ----------------------------------------------- */
                                defaultLabel        ||
       first  &&     second  && firstAndSecond      ||
   not(first) &&     second  && notFirstAndSecond   ||
       first  && not(second) && firstAndNotSecond   ||
   not(first) && not(second) && notFirstAndNotSecond
);

const endOfCategoricalProposition = (
  <span>{' '}</span>
);

const spaceDelimiter = (
  <span>{' '}</span>
);

const colorify = (word, children) => (
  <span style={{
    color: `#${ md5(word).substring(0, 6) }`,
  }}>
    { children }
  </span>
);

const turkishPluralEndfixes = (
  <span>{'(ler-lar)'}</span>
);

const makeTasim = (universal, affirmative, subject, predicate) => {
  //////////////////////////////////////////////////////////////
  //                                                          //
  //                «NOT MAINTEINED ANYMORE»                  //
  //                                                          //
  // native version of silogizma dot org project              //
  // tasım is a turkish «syllable» which means syllogism      //
  // stays here because of the references                     //
  // see «Logic.premise.makeSyllogism» for the actual version //
  //////////////////////////////////////////////////////////////
  const labelQuantity = (
    labelFlaggedBools(
      universal,
      affirmative,
      'tüm',
       null,
      'hiçbir',
       null
    )
  );

  const labelQuality = (
    labelFlaggedBools(
       universal,
       affirmative,
      '(dir)',
      '(dir)',
       spaceDelimiter + 'değildir',
       spaceDelimiter + 'değildir'
    )
  );

  return [
    /*
     * Evrensellik
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    labelQuantity && renderQuantity(labelQuantity),
    spaceDelimiter,

    /*
     * Özne
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    renderSubject(colorify(subject)),
    turkishPluralEndfixes,
    spaceDelimiter,

    /*
     * Nesne ve Kantitatiflik
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    renderPredicate(colorify(predicate), labelQuality),

    /*
     * Göstermek istenilen şey de buydu
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    endOfCategoricalProposition,
  ];
}

const optionsQuality = (affirmative, onChange) => {
  return (
    <select onChange={
      onChange
    }>
      <option value={ 'affirmative' }>are</option>
      <option value={ 'negative' }>are not</option>
    </select>
  );
}

const optionsQuantity = (universal, onChange) => {
  return (
    <select onChange={ onChange }>
      <option value={ 'universal' }>all</option>
      <option value={ 'particular' }>some</option>
    </select>
  );
}

const makeSyllogism = (
  universal,      // True or False
  affirmative,    // True or False
  subject,        // Human
  predicate,      // Mortal
  editable,
  onEdit,

  selectable,
  conclusionOf,
) => {
  // All human are mortal
  // Some Socrates socrates are human
  // Therefore:
  // Some Socreates are mortal
  const labelQuantity = (
    labelFlaggedBools(
      universal,
      affirmative,
      'all',            // universalAndAffirmative
      'some',           // notUniversalAndAffirmative
      'no',             // universalAndNotAffirmative
      'some',           // notUniversalAndNotAffirmative
    )
  );

  const labelQuality = (
    labelFlaggedBools(
      universal,
      affirmative,
      'are',            // universalAndAffirmative
      'are',            // notUniversalAndAffirmative
      'are',            // universalAndNotAffirmative
      'are not',        // notUniversalAndNotAffirmative
    )
  );

  return [
   /*
    * Quantity
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    editable
      ? optionsQuantity(universal, (event) => {
        onEdit('universal', event.target.value === 'universal')
      })
      : (
        <span style={{
            minWidth: '1.7em',
            display: 'inline-block',
         }}>
          { labelQuantity }
        </span>
      ),
    spaceDelimiter,

   /*
    * Subject
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    colorify(
      subject,
      renderSubject(
        subject,
        editable,
        value => event => {
          onEdit('subject', value);
        },
        selectable,
        conclusionOf
      ),
    ),
    spaceDelimiter,

   /*
    * Quality
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    (editable
      ?
        (  // edit the part of premise
            optionsQuality(affirmative, (event) => {
              onEdit('affirmative', event.target.value === 'affirmative')
            }
          )
        )
      :
        (  // display the part of premise
           <span style={{
              minWidth: '1.7em',
              display: 'inline-block',
           }}>
            { labelQuality }
          </span>
        )
      ),
    spaceDelimiter,

   /*
    * Predicate
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    colorify(
      predicate,
      renderPredicate(
        predicate,
        editable,
        value => event => {
          onEdit('predicate', value);
        },
        selectable,
        conclusionOf
      )
    ),

   /*
    * Quod Erat Demonstrandum
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    endOfCategoricalProposition,
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  ];
}

export default function Premise({
  universal,
  affirmative,
  subject,
  predicate,
  editable,
  onEdit,
  selectable,
  conclusionOf,
}) {

  const asSyllogism = (
    makeSyllogism(
      universal,
      affirmative,
      subject,
      predicate,
      editable,
      onEdit,
      selectable,
      conclusionOf,
    )
  );

  return (
    <div className={ styles.Container }>
      <div className={ styles.Syllogism }>
        {
          asSyllogism.map(
            (part, index) => 
              <span key={ index }>
                { part }
              </span>
          )
        }
      </div>
    </div>
  );
}

Premise.defaultProps = {
  onEdit() {},
  editable: false,
};
