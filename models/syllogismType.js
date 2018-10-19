import Syllogism from "./syllogism";
import WEAK_FORMS from "./weakForms";

const FIGURE_ONE = {
  eao: "Celaront",
  aai: "Barbari",
  eoi: "Ferio",
  aii: "Darii",
  eae: "Celarent",
  aaa: "Barbara"
};

const FIGURE_TWO = {
  aeo: "Camestros",
  eao: "Cesaro",
  aoo: "Baroco",
  eio: "Festino",
  aee: "Camestres",
  eae: "Cesare"
};

const FIGURE_THREE = {
  aai: "Darapti",
  eao: "Felapton",
  oao: "Bocardo",
  eio: "Ferison",
  iai: "Disamis",
  aii: "Datisi"
};

const FIGURE_FOUR = {
  aai: "Bamalip",
  eao: "Fesapo",
  aeo: "Calemos",
  eio: "Fresison",
  iai: "Dimatis",
  aee: "Calemes"
};

export default ({ major, minor, conclusion }) => {
  const forms = Syllogism.getPropositionForms(major, minor, conclusion);

  return (
    WEAK_FORMS[forms] ||
    FIGURE_ONE[forms] ||
    FIGURE_TWO[forms] ||
    FIGURE_THREE[forms] ||
    FIGURE_FOUR[forms]
  );
};
