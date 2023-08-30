import { GraphQLClient } from "graphql-request";

// another client for the avianis gateway should be created and exported here
const client = new GraphQLClient(
  // process.env.NEXT_PUBLIC_OPP_SERVICE_ENDPOINT as string
  "localhost:4000/graphql"
);

export { client };
