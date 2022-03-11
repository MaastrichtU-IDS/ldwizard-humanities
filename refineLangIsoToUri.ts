import { ColumnRefinement } from "@netwerkdigitaalerfgoed/ldwizard/types/WizardConfig";

const transformation: ColumnRefinement = {
  label: "Convert lang ISO to Lexvo URIs",
  type:"single",
  description:
    "This transformation will take lang ISO (e.g. fr or fra) and convert it to a Lexvo URI: http://lexvo.org/id/iso639-3/eng",
  transformation: async (searchTerm: string) => {
    // const sources = ["http://vocab.getty.edu/aat/sparql"];
    // return getUriOfSearchTerm(sources, searchTerm);
    if (searchTerm.length == 3) {
      return `http://lexvo.org/id/iso639-3/${searchTerm}`
    }
    if (searchTerm.length == 2) {
      return `http://lexvo.org/id/iso639-1/${searchTerm}`
    }
    return searchTerm
  },
};
export default transformation;
