const config = {
  overwrite: true,
  schema: "http://localhost:8080/graphql",
  documents: "./graphql/schemas/*.graphql",
  generates: {
    "./lib/generated/jolie-service.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
        {
          add: {
            content: "// @ts-nocheck",
          },
        },
      ],
      config: {
        fetcher: "graphql-request",
        exposeDocument: true,
        exposeQueryKeys: true,
        exposeFetcher: true,
        scalars: {
          DateTime: "Date",
          Date: "Date",
          Time: "Date",
          JSON: "{ [key: string]: any }",
          BigDecimal: "number",
          NonNegativeInt: "number",
          PositiveInt: "number",
        },
        addInfiniteQuery: false,
      },
    },
  },
};

export default config;
