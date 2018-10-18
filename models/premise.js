const Premise = (options = {}) => ({
  universal: true,
  affirmative: true,
  subject: "human",
  predicate: "mortal",
  ...options
});

Premise.FORMS = {
  A: { universal: true, affirmative: true },
  E: { universal: true, affirmative: false },
  I: { universal: false, affirmative: true },
  O: { universal: false, affirmative: false }
};

Premise.getPropositionForm = proposition => {
  for (let key in Premise.FORMS) {
    const form = Premise.FORMS[key];

    if (
      form &&
      proposition.universal === form.universal &&
      proposition.affirmative === form.affirmative
    ) {
      return key;
    }
  }
};

Premise.fromString = string => {
  const [form, subject, predicate] = string.split("-");

  return {
    ...Premise.FORMS[form.toUpperCase()],
    subject,
    predicate
  };
};

export default Premise;
