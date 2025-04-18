import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "http://localhost:4002",
    documents: ["src/**/*.tsx"],
    generates: {
        "./src/__generated__/": {
            preset: "client",
            presetConfig: {
                gqlTagName: "gql"
              }
          // TODO
        },
        "./src/__generated__/types.ts": {
            plugins: ["typescript", "typescript-operations"],
        },
      },
      ignoreNoDocuments: true,
};

export default config;