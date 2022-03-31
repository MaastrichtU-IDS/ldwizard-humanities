import { ColumnRefinement } from "@netwerkdigitaalerfgoed/ldwizard/types/WizardConfig";

const transformation: ColumnRefinement = {
  label: "Convert location 1 0 columns",
  type: "to-iri",
  description:
    "This transformation will generate the URI only when value is 1",
  transformation: async (searchTerm: string, data: any) => {
    console.log(searchTerm)
    console.log(data)
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
