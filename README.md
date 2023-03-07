# LD Wizard for Humanities and Social sciences

An [online GUI application](https://ldwizard.netwerkdigitaalerfgoed.nl) that makes it easy to create linked data from tabular data
related to humanities and social sciences.

This application uses the [LD Wizard](https://github.com/netwerk-digitaal-erfgoed/LDWizard).

## 🌐 Usage

You can use this application online at https://humanities.wizard.semanticscience.org

## 🐳 Deploy with Docker

You will need to have [Docker installed](https://docs.docker.com/get-docker/) to deploy the LDWizard.

Build and deploy on http://localhost:4000:

```bash
docker-compose -f ./docker/docker-compose.yml up --build --force-recreate
```

To deploy in production using [nginx-proxy](https://github.com/nginx-proxy/nginx-proxy):

```bash
docker-compose -f ./docker/docker-compose.prod.yml up --build --force-recreate
```

## 📦️ Development

### Change the LDWizard-Core

Clone `LDWizard-Core` locally (next to the `ldwizard-humanities` folder). Make the changes to `LDWizard-Core`, then add the local package to `ldwizard-humanities` (this folder):

```bash
yarn add file:./../LDWizard-Core
```

⚠️ This will change the `package.json` and `yarn.lock`, be careful to not commit them

The original LDWizard version is: `"@pldn/ldwizard": "^1.1.0",`

Use a specific branch instead of the published package (to get fixes before new releases):

```bash
yarn add git+https://github.com/vemonet/LDWizard-Core#fix-sparql-autocomplete
```

> You can change the repo and branch used in the `docker/Dockerfile` file

### Build and deploy

Follow these steps to build the application locally:

1. Install [Node.js](https://nodejs.org) (>10 and <=14) with [Yarn](https://yarnpkg.com).

2. Clone this repository and go into its root directory.

3. Install the dependencies:

   ```sh
   yarn
   ```

4. Create the build locally:

   ```sh
   yarn build
   ```

5. Start an HTTP server in the `lib/` subdirectory.  For example:

   ```sh
   cd lib
   http-server .
   ```

6. Visit <http://localhost:4000> in a web browser.

## Ontologies used

We have loaded a few ontologies to the SPARQL endpoint used for Classes/Predicates autocompletion in our GraphDB triplestore: https://graphdb.dumontierlab.com/graphs in the repository `ldwizard-humanities`

To add more properties to the autocomplete you can load a new ontology with new properties in the triplestore, you just need to make sure you use `rdfs:label` and `rdfs:comment` for your properties label and description.

* SemanticScience ontology (in the `resources` folder, to change the predicates to use `rdfs:comment`)
* Get RDFS vocabulary: `curl -L http://www.w3.org/2000/01/rdf-schema > resources/rdfs.ttl`
* https://schema.org/version/latest/schemaorg-current-https.ttl
* http://purl.org/dc/terms: https://lov.linkeddata.es/dataset/lov/vocabs/dcterms/versions/2012-06-14.n3
* http://www.w3.org/ns/prov#: https://lov.linkeddata.es/dataset/lov/vocabs/prov/versions/2015-01-11.n3
* http://purl.org/pav/: https://lov.linkeddata.es/dataset/lov/vocabs/pav/versions/2014-08-28.n3
