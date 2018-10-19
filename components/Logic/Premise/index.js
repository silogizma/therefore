import React from "react";

import renderQuantity from "./Quantity";
import renderSubject from "./Subject";
import renderPredicate from "./Predicate";
import translate from "../../../i18n/translate";

import styles from "./styles.css";

const not = o => !o;

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
) =>
  /*
    universal || affirmative || label
    ----------------------------------------------- */
  defaultLabel ||
  (first && second && firstAndSecond) ||
  (not(first) && second && notFirstAndSecond) ||
  (first && not(second) && firstAndNotSecond) ||
  (not(first) && not(second) && notFirstAndNotSecond);

const endOfCategoricalProposition = <span> </span>;

const spaceDelimiter = <span> </span>;

function stringToColor(str) {
  // https://stackoverflow.com/a/16348977/498402
  let i, hash;

  for (
    i = 0, hash = 0;
    i < str.length;
    hash = str.charCodeAt(i++) + ((hash << 5) - hash)
  );

  let color = Math.floor(
    Math.abs(
      ((Math.sin(hash) * 10000) % 1) * // 💃
        16777216 // 🍄
    )
  ).toString(16);

  return "#" + Array(6 - color.length + 1).join("0") + color;
}

const colorify = (word, children) => (
  <span
    style={{
      color: stringToColor(word)
    }}
  >
    {children}
  </span>
);

const turkishPluralEndfixes = <span>{"(ler-lar)"}</span>;

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
  const labelQuantity = labelFlaggedBools(
    universal,
    affirmative,
    "tüm",
    null,
    "hiçbir",
    null
  );

  const labelQuality = labelFlaggedBools(
    universal,
    affirmative,
    "(dir)",
    "(dir)",
    spaceDelimiter + "değildir",
    spaceDelimiter + "değildir"
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
    endOfCategoricalProposition
  ];
};

const optionsQuality = (affirmative, onChange) => {
  return (
    <select onChange={onChange}>
      <option value={"affirmative"}>are</option>
      <option value={"negative"}>are not</option>
    </select>
  );
};

const optionsQuantity = (universal, onChange) => {
  return (
    <select onChange={onChange}>
      <option value={"universal"}>all</option>
      <option value={"particular"}>some</option>
    </select>
  );
};

const makeSyllogism = (
  universal, // True or False
  affirmative, // True or False
  subject, // Human
  predicate, // Mortal
  editable,
  onEdit,
  selectable,
  conclusionOf,
  interfaceLanguage
) => {
  // All human are mortal
  // Some Socrates socrates are human
  // Therefore:
  // Some Socreates are mortal
  const labelQuantity = labelFlaggedBools(
    universal,
    affirmative,

    // All human are mortal
    translate(interfaceLanguage, "all"), // universalAndAffirmative

    // Some human are mortal
    translate(interfaceLanguage, "some"), // notUniversalAndAffirmative

    // No human are mortal
    translate(interfaceLanguage, "no"), // universalAndNotAffirmative

    // Some human are not mortal
    translate(interfaceLanguage, "some") // notUniversalAndNotAffirmative
  );

  const labelQuality = labelFlaggedBools(
    universal,
    affirmative,
    translate(interfaceLanguage, "are"), // universalAndAffirmative
    translate(interfaceLanguage, "are"), // notUniversalAndAffirmative
    translate(interfaceLanguage, "are"), // universalAndNotAffirmative
    translate(interfaceLanguage, "are not") // notUniversalAndNotAffirmative
  );

  return [
    /*
    * Quantity
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    editable ? (
      optionsQuantity(universal, event => {
        onEdit("universal", event.target.value === "universal");
      })
    ) : (
      <span
        style={{
          minWidth: "1.7em",
          display: "inline-block"
        }}
      >
        {labelQuantity}
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
          onEdit("subject", value);
        },
        selectable,
        conclusionOf
      )
    ),
    spaceDelimiter,

    /*
    * Quality
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    editable ? (
      // edit the part of premise
      optionsQuality(affirmative, event => {
        onEdit("affirmative", event.target.value === "affirmative");
      })
    ) : (
      // display the part of premise
      <span
        style={{
          minWidth: "1.7em",
          display: "inline-block"
        }}
      >
        {labelQuality}
      </span>
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
          onEdit("predicate", value);
        },
        selectable,
        conclusionOf
      )
    ),

    /*
    * Quod Erat Demonstrandum
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    endOfCategoricalProposition
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  ];
};

export default function Premise({
  universal,
  affirmative,
  subject,
  predicate,
  editable,
  onEdit,
  selectable,
  conclusionOf,
  interfaceLanguage
}) {
  const asSyllogism = makeSyllogism(
    universal, // All
    affirmative, // Human
    subject, // Are
    predicate, // Mortal

    editable,
    onEdit,
    selectable,
    conclusionOf,
    interfaceLanguage
  );

  return (
    <div className={styles.Container}>
      <div className={styles.Syllogism}>
        {asSyllogism.map((part, index) => (
          <span key={index}>{part}</span>
        ))}
      </div>
    </div>
  );
}

Premise.defaultProps = {
  onEdit() {},
  editable: false
};
