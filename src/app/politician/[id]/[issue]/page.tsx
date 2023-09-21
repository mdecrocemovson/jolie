"use client";
import { Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { capitalize } from "../../../../utils/utils";
import { useGetPoliticianQuery } from "../../../../../lib/generated/jolie-service";
import { client } from "../../../../../graphql/schemas/graphqlClient";

const Issue = () => {
  const { id, issue } = useParams();
  const { data, isLoading } = useGetPoliticianQuery(client, {
    id: id as string,
  });
  const politician = data?.fetchPolitician;
  if (isLoading || !politician) {
    return <div>Loading...</div>;
  }
  return (
    <Typography variant="h1" component="h2">
      {capitalize(politician.firstName as string)}{" "}
      {capitalize(politician.lastName as string)} on{" "}
      {capitalize(issue as string)}
    </Typography>
  );
};

export default Issue;
