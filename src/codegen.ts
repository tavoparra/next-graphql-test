import { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
    schema: "http://localhost:4000/graphql",
    documents: "src/**/*.graphql",
    generates: {
        "src/generated/": {
            plugins: [],
            preset: "client",
            presetConfig: {
                gqlTagName: "gql"
            }
        }
    },
    ignoreNoDocuments: true
};

export default config;