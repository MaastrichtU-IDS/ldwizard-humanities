import WizardConfig, { PrefixEntry } from "@pldn/ldwizard/types/WizardConfig";
import RefineLangIsoToUri from "./refineLangIsoToUri";
import RefineCountryLocation from "./refineCountryLocation";
// @ts-ignore
const logo = require("./um_logo.png").default;
// @ts-ignore
const homepage = require("./homepage.md");

const wizardConfig: WizardConfig = {
  appName: "LDWizard - Humanities and Social Sciences",
  defaultBaseIri: "https://w3id.org/umids/wizard/",
  primaryColor: "#4caf50", // green
  secondaryColor: "#1565c0", // blue
  homepageMarkdown: homepage,
  publishOrder: ["download"],
  icon: logo,
  //favIcon: logo,
  dataplatformLink: "https://yasgui.triply.cc/?endpoint=https://graphdb.dumontierlab.com/repositories/ldwizard-humanities",
  repositoryLink: "https://github.com/MaastrichtU-IDS/ldwizard-humanities",
  documentationLink: "https://github.com/MaastrichtU-IDS/ldwizard-humanities",

  classConfig: {method:"sparql", endpoint: "https://graphdb.dumontierlab.com/repositories/ldwizard-humanities"},
  predicateConfig: {method:"sparql", endpoint: "https://graphdb.dumontierlab.com/repositories/ldwizard-humanities"},

  columnRefinements: [
    RefineLangIsoToUri,
    RefineCountryLocation,
  ],

  getAllowedPrefixes: async () => {
    const prefixes: PrefixEntry[] = [
      {
        "prefixLabel": "sio",
        "iri": "http://semanticscience.org/resource/"
      },
      {
        "prefixLabel": "biolink",
        "iri": "https://w3id.org/biolink/vocab/"
      },
      {
        "prefixLabel": "bl",
        "iri": "http://w3id.org/biolink/vocab/"
      },
      {
        "prefixLabel": "wd",
        "iri": "http://www.wikidata.org/entity/"
      },
      {
        "prefixLabel": "dbo",
        "iri": "http://dbpedia.org/ontology/"
      },
      {
        "prefixLabel": "dbp",
        "iri": "http://dbpedia.org/property/"
      },
      {
        "prefixLabel": "dc",
        "iri": "http://purl.org/dc/elements/1.1/"
      },
      {
        "prefixLabel": "dcat",
        "iri": "http://www.w3.org/ns/dcat#"
      },
      {
        "prefixLabel": "dct",
        "iri": "http://purl.org/dc/terms/"
      },
      {
        "prefixLabel": "fn",
        "iri": "http://www.w3.org/2005/xpath-functions#"
      },
      {
        "prefixLabel": "foaf",
        "iri": "http://xmlns.com/foaf/0.1/"
      },
      {
        "prefixLabel": "geo",
        "iri": "http://www.opengis.net/ont/geosparql#"
      },
      {
        "prefixLabel": "geof",
        "iri": "http://www.opengis.net/def/function/geosparql/"
      },
      {
        "prefixLabel": "geor",
        "iri": "http://www.opengis.net/def/rule/geosparql/"
      },
      {
        "prefixLabel": "gml",
        "iri": "http://www.opengis.net/ont/gml#"
      },
      {
        "prefixLabel": "gr",
        "iri": "http://purl.org/goodrelations/v1#"
      },
      {
        "prefixLabel": "owl",
        "iri": "http://www.w3.org/2002/07/owl#"
      },
      {
        "prefixLabel": "prov",
        "iri": "http://www.w3.org/ns/prov#"
      },
      {
        "prefixLabel": "pav",
        "iri": "http://purl.org/pav/"
      },
      {
        "prefixLabel": "qb",
        "iri": "http://purl.org/linked-data/cube#"
      },
      {
        "prefixLabel": "rdf",
        "iri": "http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      },
      {
        "prefixLabel": "rdfa",
        "iri": "http://www.w3.org/ns/rdfa#"
      },
      {
        "prefixLabel": "rdfs",
        "iri": "http://www.w3.org/2000/01/rdf-schema#"
      },
      {
        "prefixLabel": "schema",
        "iri": "https://schema.org/"
      },
      {
        "prefixLabel": "sioc",
        "iri": "http://rdfs.org/sioc/ns#"
      },
      {
        "prefixLabel": "skos",
        "iri": "http://www.w3.org/2004/02/skos/core#"
      },
      {
        "prefixLabel": "sf",
        "iri": "http://www.opengis.net/ont/sf#"
      },
      {
        "prefixLabel": "void",
        "iri": "http://rdfs.org/ns/void#"
      },
      {
        "prefixLabel": "wgs84",
        "iri": "http://www.w3.org/2003/01/geo/wgs84_pos#"
      },
      {
        "prefixLabel": "xsd",
        "iri": "http://www.w3.org/2001/XMLSchema#"
      },
      {
        "prefixLabel": "yago",
        "iri": "http://yago-knowledge.org/resource/"
      },
      {
        "prefixLabel": "bnode",
        "iri": "https://data.netwerkdigitaalerfgoed.nl/.well-known/genid/"
      },
      {
        "prefixLabel": "bif",
        "iri": "http://www.openlinksw.com/schemas/bif#"
      },
      {
        "prefixLabel": "pnv",
        "iri": "https://w3id.org/pnv#"
      },
      {
        "prefixLabel": "graph",
        "iri": "https://data.netwerkdigitaalerfgoed.nl/ld-wizard/cidoc-crm/graphs/"
      },
      {
        "prefixLabel": "cidoc-crm",
        "iri": "http://www.cidoc-crm.org/cidoc-crm/"
      }
    ]
    return prefixes;
  },
};
export default wizardConfig;
