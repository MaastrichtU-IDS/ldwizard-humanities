import { ColumnRefinement } from "@netwerkdigitaalerfgoed/ldwizard/types/WizardConfig";

const transformation: ColumnRefinement = {
  label: "Convert boolean to URI",
  type: "single-param",
  description:
    "This transformation will generate the given URI only when the value of the row is 1, or true.",
  transformation: async (searchTerm: string, param: any) => {
    if (searchTerm.trim() === '1' || searchTerm.trim().toLowerCase() === 'true') {
      return param
    }
    return null
  },
};
export default transformation;
