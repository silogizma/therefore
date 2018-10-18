import premise from "./premise";

const Syllogism = (options = {}) => ({
  id: null,

  major: premise({
    universal: true
  }),

  minor: premise({
    universal: false
  }),

  conclusion: premise({
    universal: false
  }),

  ...options
});

Syllogism.getPropositionForms = (major, minor, conclusion) => {
  return [
    premise.getPropositionForm(major),
    premise.getPropositionForm(minor),
    premise.getPropositionForm(conclusion)
  ]
    .map(c => c.toLowerCase())
    .join("");
};

export default Syllogism;
